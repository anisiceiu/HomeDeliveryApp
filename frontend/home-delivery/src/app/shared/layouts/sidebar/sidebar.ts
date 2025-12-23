import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  constructor(private auth: AuthService, private router: Router) {
  
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
}
