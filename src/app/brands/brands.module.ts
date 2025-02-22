import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrandsComponent } from './brands.component';
import { BrandsHomeComponent } from './brands-home/brands-home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    BrandsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrandsHomeComponent,
    MatFormFieldModule
  ],
  providers: []
})
export class BrandsModule { } 