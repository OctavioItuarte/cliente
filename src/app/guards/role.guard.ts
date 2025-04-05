import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { map, take } from 'rxjs/operators';

export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return (route, state) => {
    const loginService = inject(LoginService);
    const router = inject(Router);

    return loginService.userRole$.pipe(
      take(1),
      map(role => {
        if (role && allowedRoles.includes(role)) {
          return true;
        } else {
          router.navigate(['/login']);
          return false;
        }
      })
    );
  };
}