import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnDestroy {
  constructor(private authService: AuthService) { }

  reenviar() {
    this.authService.enviarMailVerificacion();
  }

  ngOnDestroy() {
    this.authService.logout();
  }
}
