import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  get cart() {
    return this.cartSubject.value;
  }

  add(item: Omit<CartItem, 'qty'>) {
    const cart = [...this.cart];
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    this.cartSubject.next(cart);
  }

  updateQty(index: number, qty: number) {
    const cart = [...this.cart];
    cart[index].qty = qty < 1 ? 1 : qty;
    this.cartSubject.next(cart);
  }

  remove(index: number) {
    const cart = [...this.cart];
    cart.splice(index, 1);
    this.cartSubject.next(cart);
  }

  total() {
    return this.cart.reduce((t, i) => t + i.price * i.qty, 0);
  }
}
