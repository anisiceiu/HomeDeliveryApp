import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { CdkAriaLive } from "../../../../node_modules/@angular/cdk/types/_a11y-module-chunk";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 yourLocation: string = '';

  constructor(private ngZone: NgZone) {}

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
