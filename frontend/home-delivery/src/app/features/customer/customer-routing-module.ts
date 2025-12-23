import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboard } from './customer-dashboard/customer-dashboard';
import { Address } from './address/address';

const routes: Routes = [
  {path:'dashboard',component:CustomerDashboard},
  {path:'address',component:Address},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
