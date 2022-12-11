import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, map, Observable,  } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private authService:AuthService, private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
: boolean | UrlTree | Promise<boolean> | Observable<boolean | UrlTree> {


  return this.authService.currentUser.pipe(first(),map((user)=>{
        const logUser = !!user;
        if(logUser){
          return true;
        }else{
          return this.router.createUrlTree(['/auth'],{queryParams: { returnUrl: state.url }});
        }
    }))
  }
}

// canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot)
// : boolean | UrlTree | Promise<boolean> | Observable<boolean | UrlTree>   {
//     return this.authService.currentUser.pipe(map(user => {
//       take(1);
//       const isLogged = !!user;
//       if (isLogged) {
//         return true;
//       }
//       return this.router.createUrlTree(['/auth']);
//       }),
//     );
//   }

// }
