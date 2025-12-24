import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryDashboard } from './delivery-dashboard/delivery-dashboard';
import { Navigation } from './navigation/navigation';

const routes: Routes = [
  {path:'dashboard',component:DeliveryDashboard},
  {path:'navigation',component:Navigation}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
