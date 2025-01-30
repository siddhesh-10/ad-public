import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('fileInput') fileInput!: ElementRef;
  uploadedFiles: File[] = [];
  adForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adForm = this.fb.group({
      adName: ['', [Validators.required, Validators.minLength(3)]],
      adRequirements: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(100)]],
      selectionMode: ['self', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      influencerType: [''],
      category: ['fashion'],
      vibeScore: [70, [Validators.min(0), Validators.max(100)]],
      instructions: [''],
      hashtags: ['']
    });
  }

  onSubmit() {
    if (this.adForm.valid && this.uploadedFiles.length > 0) {
      const formData = new FormData();
      
      // Add form values
      Object.keys(this.adForm.value).forEach(key => {
        formData.append(key, this.adForm.value[key]);
      });
      
      // Add files
      this.uploadedFiles.forEach(file => {
        formData.append('files', file, file.name);
      });

      console.log('Form Submitted', formData);
      // Add your API submission logic here
    }
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFiles(input.files);
    }
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  private handleFiles(files: FileList) {
    const remainingSlots = 10 - this.uploadedFiles.length;
    const filesArray = Array.from(files).slice(0, remainingSlots);
    
    this.uploadedFiles = [...this.uploadedFiles, ...filesArray];
    
    // Clear the input to allow same file re-upload
    this.fileInput.nativeElement.value = '';
  }

  removeFile(file: File) {
    this.uploadedFiles = this.uploadedFiles.filter(f => f !== file);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getFormControl(controlName: string) {
    return this.adForm.get(controlName);
  }
}