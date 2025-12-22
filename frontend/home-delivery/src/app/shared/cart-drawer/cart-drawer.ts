import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartDrawerService } from '../../core/services/cart-drawer.service';

@Component({
  standalone:true,
  selector: 'app-cart-drawer',
  imports: [CommonModule],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css',
})
export class CartDrawer {

constructor(public cartService:CartService,public cart: CartDrawerService){

}

}
