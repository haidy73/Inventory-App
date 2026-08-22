import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  const currentRole = localStorage.getItem('role');
  const allowedRoles = route.data['roles'] as string[];

  if (currentRole && allowedRoles.includes(currentRole)) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
