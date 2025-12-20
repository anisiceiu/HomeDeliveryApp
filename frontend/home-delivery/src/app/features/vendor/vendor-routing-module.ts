import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDashboard } from './vendor-dashboard/vendor-dashboard';

const routes: Routes = [
  {path:'dashboard',component:VendorDashboard}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
