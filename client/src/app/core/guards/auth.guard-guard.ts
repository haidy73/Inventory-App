import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    if(localStorage.getItem('token')){
    return true
  }
  alert('you dont have permission')
  return router.createUrlTree(['/login']);
}


