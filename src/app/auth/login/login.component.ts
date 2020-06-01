import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
      this.authService.userRedirect(user);
    } catch (error) {

    }
  }

  async loginGithub() {
    try {
      const user = await this.authService.loginWithGithub();
      this.authService.userRedirect(user);
    } catch (error) {
      console.log(error);
    }
  }

  async loginGoogle() {
    try {
      const user = await this.authService.loginWithGoogle();
      this.authService.userRedirect(user);
    } catch (error) {
      console.log(error);
    }
  }
}
