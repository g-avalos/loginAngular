import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { AuthService } from './auth/services/auth.service';
import { CanDocenteGuard } from './auth/guards/can-docente.guard';
import { CanAlumnoGuard } from './auth/guards/can-alumno.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [ AuthService, CanDocenteGuard, CanAdminGuard, CanAlumnoGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
