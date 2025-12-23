import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const CART_KEY = 'app_cart';

@Injectable({ providedIn: 'root' })
export class CartService {

  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadFromStorage());
  cart$ = this.cartSubject.asObservable();

  /** Current cart value */
  get cart(): CartItem[] {
    return this.cartSubject.value;
  }

  /** Add item */
  add(item: Omit<CartItem, 'qty'>) {
    const cart = [...this.cart];
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    this.update(cart);
  }

  /** Update quantity */
  updateQty(index: number, qty: number) {
    const cart = [...this.cart];
    cart[index].qty = qty < 1 ? 1 : qty;
    this.update(cart);
  }

  /** Remove item */
  remove(index: number) {
    const cart = [...this.cart];
    cart.splice(index, 1);
    this.update(cart);
  }

  /** Clear cart */
  clear() {
    this.update([]);
  }

  /** Total price */
  total(): number {
    return this.cart.reduce((t, i) => t + i.price * i.qty, 0);
  }

  // =========================
  // LocalStorage helpers
  // =========================

  private update(cart: CartItem[]) {
    this.cartSubject.next(cart);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private loadFromStorage(): CartItem[] {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  }
}
