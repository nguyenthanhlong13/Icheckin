import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PublicServiceService } from './modules/services/public-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(PublicServiceService);
  const router = inject(Router)
  console.log(router.url);
  if(authService.isAuth.value === false){
    router.navigate(['/dang-nhap'])
  }else{
    if(state.url === '/')
      router.navigate(['admin/trang-chu'])
  }

  return authService.isAuth.value;
};
