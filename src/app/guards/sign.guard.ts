import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router) {}
canActivate()
: boolean | UrlTree | Promise<boolean> | Observable<boolean | UrlTree>   {
    return this.authService.currentUser.pipe(map(user => {
      take(1);
      const isLogged = !!user;
      if (!isLogged) {
        return true;
      }
      return this.router.createUrlTree(['/home']);
      }),
    );
  }
}
