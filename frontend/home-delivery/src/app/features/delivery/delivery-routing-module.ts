import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryDashboard } from './delivery-dashboard/delivery-dashboard';

const routes: Routes = [
  {path:'dashboard',component:DeliveryDashboard}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
