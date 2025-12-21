import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProductDetails } from './product-details/product-details';

const routes: Routes = [
      { path: 'login', component: Login },
      { path: 'product-details', component: ProductDetails },
      { path: 'register', component:Register}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
