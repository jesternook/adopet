import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: AngularFireAuth;

  constructor(auth: AngularFireAuth) { 
    this.auth = auth;
  }

  public login(email: string, senha: string):Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, senha);
  }

  public register(email: string, senha: string):  Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, senha);
  }

  public logout(): Promise<any>{
    return this.auth.signOut();
  }

  isAuthenticated(): boolean {
    let token: string | null = localStorage.getItem("token");
    if (token === null) {
      return false;
    } else if (token === "true") {
      return true;
    }
    return false;
  }
}
