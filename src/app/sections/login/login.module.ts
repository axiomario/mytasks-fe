import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule { }
