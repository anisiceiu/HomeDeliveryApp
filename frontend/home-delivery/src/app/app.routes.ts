import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { Role } from './Role';
import { AuthLayout } from './shared/layouts/auth-layout/auth-layout';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { Home } from './auth/home/home';

export const routes: Routes = [
   {
      path:'',
      component:Home
   },
    {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path:'', loadChildren: () => import('./auth/auth-routing-module').then(m=> m.AuthRoutingModule) }
    ]
  },

  {
    path: '',
    component: MainLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./features/admin/admin-routing-module').then(m=> m.AdminRoutingModule)
      },
      {
        path: 'vendor',
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Vendor] },
        loadChildren: () => import('./features/vendor/vendor-routing-module').then(m=> m.VendorRoutingModule)
      },
      {
        path: 'delivery',
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Delivery] },
        loadChildren: () => import('./features/delivery/delivery-routing-module').then(m=> m.DeliveryRoutingModule)
      },
      {
        path: 'customer',
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Customer] },
        loadChildren: () => import('./features/customer/customer-routing-module').then(m=> m.CustomerRoutingModule)
      }
    ]
  },

  { path: '**', redirectTo: 'auth/login' }
];
