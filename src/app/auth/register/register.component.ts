import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    dni: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister(): Promise<string> {
    const { email, dni, password } = this.registerForm.value;
    try {
      const user = await this.authService.register(email, dni, password);
      this.authService.userRedirect(user);

      if (user) {
        this.authService.logout();
      }

      return email;
    } catch (error) {
      alert(error.message);
    }
  }
}
