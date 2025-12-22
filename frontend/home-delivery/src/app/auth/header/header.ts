import { Component } from '@angular/core';
import { CartDrawerService } from '../../core/services/cart-drawer.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
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
