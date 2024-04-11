import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../state/auth.selectors';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const store = inject(Store);
  return store
    .select(isAuthenticated)
    .pipe(map((auth) => (!auth ? router.createUrlTree(['auth']) : true)));
};
