import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      return result;
    } catch {
      console.log("Error");
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      return result;
    } catch {
      console.log("Error");
    }
 }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch {
      console.log("Error");
    }
  }
}
