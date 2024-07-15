import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouterGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.user.id !== 1) {
      router.navigateByUrl('/about');
      return false;
    }
  }
  return true;
};