import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
@Input() toggled = false;

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
