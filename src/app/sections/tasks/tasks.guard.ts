import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SessionService } from '../../common/services/session.service';

export const TasksGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const sessionService = inject(SessionService);

  if (!sessionService.isLogged) {
    router.navigate(['/']);
  }

  return sessionService.isLogged;
};