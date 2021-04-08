import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { Usuario } from 'src/app/shared/model/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  loading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    this.loading = true;
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
      this.authService.userRedirect(user);
    } catch (error) {
      alert(error.message)
    }
  }
}
