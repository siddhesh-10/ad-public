import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-waitlist',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.scss'
})
export class WaitlistComponent {
  waitlistForm: FormGroup;
  showSuccessPopup = false;
  showErrorPopup = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.waitlistForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      instagram: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.waitlistForm.valid) {
      const headers = {
        'path': 'client/waitlist-signup',
        'x-api-key': environment['waitlist-api-key']
      };

      const body = {
        email: this.waitlistForm.value.email,
        name: this.waitlistForm.value.name,
        instagramId: this.waitlistForm.value.instagram
      };

      this.http.post('https://v2l22zgg6j.execute-api.ap-southeast-1.amazonaws.com/dev/client/public', body, { headers })
        .subscribe({
          next: (response) => {
            this.showSuccessPopup = true;
            // setTimeout(() => {
            //   this.showSuccessPopup = false;
            // }, 3000);
            this.waitlistForm.reset();
          },
          error: (error) => {
            console.log(error.error);
            if (error.error.error === 'Email already exists in waitlist') {
              this.errorMessage = 'This email is already on the waitlist';
            } else {
              this.errorMessage = 'An error occurred. Please try again later';
            }
            this.showErrorPopup = true;
            setTimeout(() => {
              this.showErrorPopup = false;
            }, 3000);
          }
        });
    }
  }
}
