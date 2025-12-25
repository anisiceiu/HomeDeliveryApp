import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AddUser } from './add-user/add-user';
import { UserList } from './user-list/user-list';

const routes: Routes = [
  {path:'dashboard',component:AdminDashboard},
  {path:'add-user',component:AddUser},
  {path:'user-list',component:UserList},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
