import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  private router: Router;
  private service: AuthService;

  constructor(router: Router, service: AuthService) {
    this.router = router;
    this.service = service;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let authenticated = this.service.isAuthenticated()
    if (!authenticated) {
      this.router.navigate(['/login'])
    }
    return authenticated;
  }
}
