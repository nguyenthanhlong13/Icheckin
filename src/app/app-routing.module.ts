import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbroadComponent } from './modules/admin/dashbroad/dashbroad.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('@modules/admin/admin.module').then(m=>m.AdminModule)
    // canActivate: [],
    canActivate: [authGuard],
    component: DashbroadComponent,
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
   
  },
  {
    path: 'admin',
    // loadChildren: () => import('@modules/admin/admin.module').then(m=>m.AdminModule)
    // canActivate: []
    canActivate: [authGuard],
    component: DashbroadComponent,
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
   
  },

  {
    path: '',
    // component: DangNhapComponent
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
    
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
