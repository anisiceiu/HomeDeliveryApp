import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material-module';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,MaterialModule,CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
constructor(private auth: AuthService, private router: Router) {
  this.getUserName();
}

  isAdmin() {
    return this.auth.getUserRoles().includes('Admin');
  }

  isVendor() {
    return this.auth.getUserRoles().includes('Vendor');
  }

  isDelivery() {
    return this.auth.getUserRoles().includes('Delivery');
  }

  isCustomer() {
    return this.auth.getUserRoles().includes('Customer');
  }

  getUserName()
  {
    let username=this.auth.getUserName();
    return username;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
