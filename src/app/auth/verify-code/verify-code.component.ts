import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CognitoService } from '../../../app/shared/services/cognito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-code',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  email: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  verifyCodeForm: FormGroup; // Declare the FormGroup for the form
  isSignup: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    
    private cognitoService: CognitoService,
    private fb: FormBuilder 
  ) {
  
    this.verifyCodeForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  ngOnInit(): void {
    this.email = this.cognitoService.verifyCodeEmail;
    this.isSignup = this.cognitoService.verifyCodeFromSignup;
  }

  async onSubmit(): Promise<void> {
    
    if (this.verifyCodeForm.invalid) {
      this.errorMessage = 'Please enter a valid verification code.';
      return;
    }

    const code = this.verifyCodeForm.get('code')?.value;
    console.log('codeee ',code);
    if (!this.email) {
      this.errorMessage = 'Email is missing. Please go back to signup and try again.';
      return;
    }

 
    this.loading = true;
    this.errorMessage = '';
    try {
      // Call the confirmSignUp function from CognitoService
      if(this.isSignup){
        await this.cognitoService.confirmSignUp(this.email, code);
        // Navigate to the home or login page after successful verification
        this.router.navigate(['/login']);
      }else{
        // Navigate to the home or login page after successful verification
        this.cognitoService.setPasswordEmail = this.email;
        this.cognitoService.setPasswordCode = code;
        this.router.navigate(['/set-password']);
      }
      

    } catch (error: any) {
      this.errorMessage = error.message || 'An error occurred during verification.';
    } finally {
      this.loading = false;
    }
  }

  resendCode(): void {
    // this.cognitoService.
  }
}
