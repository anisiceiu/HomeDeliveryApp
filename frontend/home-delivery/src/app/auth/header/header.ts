import { Component } from '@angular/core';
import { CartDrawerService } from '../../core/services/cart-drawer.service';
import { CartService } from '../../core/services/cart.service';
import { AdminRoutingModule } from "../../features/admin/admin-routing-module";

@Component({
  selector: 'app-header',
  imports: [AdminRoutingModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 constructor(private cart: CartDrawerService,public cartService:CartService) {}

  openCart() {
    this.cart.open(); // 🔥 calls drawer
  }

  getItemCount()
  {
    return this.cartService.cart.length;
  }
}
