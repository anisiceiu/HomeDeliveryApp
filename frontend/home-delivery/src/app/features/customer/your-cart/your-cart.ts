import { Component } from '@angular/core';
import { CartItem, CartService } from '../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../../shared/material/material-module";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-your-cart',
  imports: [CommonModule, MaterialModule],
  templateUrl: './your-cart.html',
  styleUrl: './your-cart.css',
})
export class YourCart {
  cart$!: Observable<CartItem[]>
  constructor(public cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }



  updateQty(index: number, qty: number) {
    this.cartService.updateQty(index, qty);
  }

  remove(index: number) {
    this.cartService.remove(index);
  }

  get total() {
    return this.cartService.total();
  }
}
