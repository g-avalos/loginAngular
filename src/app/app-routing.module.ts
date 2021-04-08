import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDocenteGuard } from './auth/guards/can-docente.guard';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanAlumnoGuard } from './auth/guards/can-alumno.guard';
import { CanAuthGuard } from './auth/guards/can-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [ CanAuthGuard ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'confirmacion',
    component: SendEmailComponent,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./auth/admin/admin.module').then((m) => m.AdminModule),
      canActivate: [ CanAdminGuard ]
  },
  {
    path: 'alumno',
    loadChildren: () =>
      import('./auth/alumno/alumno.module').then((m) => m.AlumnoModule),
      canActivate: [ CanAlumnoGuard ]
  },
  {
    path: 'docente',
    loadChildren: () =>
      import('./auth/docente/docente.module').then((m) => m.DocenteModule),
      canActivate: [ CanDocenteGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
