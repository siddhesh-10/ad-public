import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CognitoService } from '../../shared/services/cognito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent  implements OnInit{

  email: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  verifyCodeForm: FormGroup;
  isSignup: boolean = false;
  passwordMismatch = false;
  code = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cognitoService: CognitoService,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    // Initialize the form with validation
    this.verifyCodeForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

ngOnInit(): void {
  // Retrieve the email from the query parameters
  this.route.queryParams.subscribe(params => {
    this.email = params['email'] || '';
    this.code = params['code'];
    if (!this.email) {
      this.errorMessage = 'Email is missing. Please go back to signup and try again.';
    }
  });
}

async onSetPassword() {
  console.log('set password called',this.email,this.verifyCodeForm.value);
  if (this.verifyCodeForm.valid) {
    const { password, confirmPassword } = this.verifyCodeForm.value;
    if (password === confirmPassword) {
      try{
        await this.cognitoService.forgotPasswordSubmit(this.email,this.code,password);
        console.log('set password success');
        this.router.navigate(['/login']);
      }catch(e:any){
        this.errorMessage = e.message;
      }
    } else {
      this.passwordMismatch = true;
    }
  }
}
}
