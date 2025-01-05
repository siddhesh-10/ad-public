import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  MatOption } from '@angular/material/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-brands-home',
  imports: [
    CommonModule, MatLabel, ReactiveFormsModule, MatFormFieldModule, MatRadioButton, MatOption, MatInputModule, MatSelect,MatRadioGroup
  ],
  templateUrl: './brands-home.component.html',
  styleUrls: ['./brands-home.component.scss'],
})
export class BrandsHomeComponent {
  adForm: FormGroup;
  uploadedFiles: File[] = [];

  constructor(private fb: FormBuilder) {
    this.adForm = this.fb.group({
      adName: ['', Validators.required],
      adRequirements: ['', Validators.required],
      instructions: [''],
      budget: ['', [Validators.required, Validators.min(1)]],
      selectionMode: ['self'], // Default selection
      influencerType: [''],
      category: [''],
      vibeScore: [''],
      additionalRequirements: [''],
    });
  }

  onSubmit(): void {
    if (this.adForm.valid) {
      const adData = { ...this.adForm.value, uploadedFiles: this.uploadedFiles };
      console.log('Ad Created:', adData);
      // Send the data to the backend or process it as needed
    } else {
      console.error('Form is invalid');
    }
  }

  onFileUpload(event: any): void {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
    console.log('Uploaded Files:', this.uploadedFiles);
  }
}
