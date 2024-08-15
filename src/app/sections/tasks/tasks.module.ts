import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TasksComponent } from './tasks.component';
import { HeaderComponent } from './header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-list/task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: TasksComponent }]),
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    TasksComponent,
    HeaderComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  providers: [],
})
export class TasksModule { }