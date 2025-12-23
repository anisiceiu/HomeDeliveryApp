import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboard } from './customer-dashboard/customer-dashboard';
import { Address } from './address/address';
import { AddAddress } from './add-address/add-address';
import { YourCart } from './your-cart/your-cart';

const routes: Routes = [
  { path: 'dashboard', component: CustomerDashboard },
  { path: 'address', component: Address },
  { path: 'add-address', component: AddAddress },
  { path: 'your-cart', component: YourCart },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
