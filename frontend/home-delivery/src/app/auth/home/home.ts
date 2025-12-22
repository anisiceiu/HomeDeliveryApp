import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { CdkAriaLive } from "../../../../node_modules/@angular/cdk/types/_a11y-module-chunk";
import { AdminRoutingModule } from "../../features/admin/admin-routing-module";
import { Header } from "../header/header";
import { CartDrawer } from "../../shared/cart-drawer/cart-drawer";
import { CartItem, CartService } from '../../core/services/cart.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, AdminRoutingModule, Header, CartDrawer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 yourLocation: string = '';
 items: any[] = [
  {
    id:1,
    name: 'Burger',
    description: 'Juicy beef burger with cheese',
    price: 250
  },
  {
    id:2,
    name: 'Pizza',
    description: 'Cheese pizza with fresh toppings',
    price: 850
  },
  {
    id:3,
    name: 'Pasta',
    description: 'Creamy white sauce pasta',
    price: 420
  },
  {
    id:4,
    name: 'Coffee',
    description: 'Hot brewed black coffee',
    price: 120
  }
];
  constructor(private ngZone: NgZone,public cartService:CartService) {}

  addToCart(item:any)
  {
    let i:CartItem={id:item.id,name:item.name,price:item.price,qty:1};
    this.cartService.add(i);
  }

  async getLocation() {
    try {
      const position = await this.getCurrentPosition();
      const address = await this.getAddress(position.coords.latitude, position.coords.longitude);
      this.ngZone.run(() => {
        this.yourLocation = address;
      });
    } catch (err) {
      console.error(err);
      this.yourLocation = 'Unable to get location';
    }
  }

  getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation not supported');
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  async getAddress(lat: number, lng: number): Promise<string> {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
    const data = await response.json();
    return data.display_name;
  }


   menuItems = ['All', 'Cafe', 'Toys', 'Fresh','Electronics','Mobiles','Beauty','Fashion'];
   
  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }

}
