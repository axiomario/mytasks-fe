import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './sections/login/login.guard';
import { TasksGuard } from './sections/tasks/tasks.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    loadChildren: () => import('./sections/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'tasks',
    canActivate: [TasksGuard],
    loadChildren: () => import('./sections/tasks/tasks.module').then(m => m.TasksModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
