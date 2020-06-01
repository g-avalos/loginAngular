import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl('');

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onReset() {
    try {
      this.authService.forgotPassword(this.email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log("Error -> ", error);

    }
  }
}
