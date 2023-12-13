import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';

export const heroesGuard: CanActivateFn = (route, state) => {
  const service = inject(Router);
  const userService = inject(UserService);

  if(userService.isAuthenticated()) {
    return true;
  } else {
    service.navigate(['/login']);
    return false;
  }

};
