import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CognitoService } from '../app/shared/services/cognito.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const cognitoService = inject(CognitoService);
  const router = inject(Router);

  return from(cognitoService.isAuthenticated()).pipe(
    map(isAuthenticated => {
      const authRoutes = ['/auth', '/forgot-password', '/verify-code', '/set-password'];
      const isAuthPage = authRoutes.includes(state.url);

      if (isAuthenticated && isAuthPage) {
        router.navigate(['/brands']);
        return false;
      }

      if (!isAuthenticated && !isAuthPage) {
        router.navigate(['/auth']);
        return false;
      }

      return true;
    })
  );
};
