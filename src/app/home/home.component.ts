import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";
import { User } from 'firebase';
import { Observable, Subscription } from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/services/auth.service';
import { Usuario } from '../shared/model/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AuthService]
})

export class HomeComponent implements OnInit {
  public _notasDni: any;
  public _notas: any;
  sub: Subscription;
  user: Usuario;
  public usuario$: Observable<User> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    let usuario = this.authService.usuario$.subscribe(
      user => {
        this.user = user;
        if (this.user !== undefined && this.user !== null) {
          if (this.user.dni === 24756181) {
            axios.get('http://localhost:3001/notas').then(response => {
              this._notas = response.data.notas;
            });
          } else {
            axios.get('http://localhost:3001/notas/' + this.user.dni).then(response => {
              this._notasDni = response.data.notasDni;
            });
          }
        }
      });
  }
}
