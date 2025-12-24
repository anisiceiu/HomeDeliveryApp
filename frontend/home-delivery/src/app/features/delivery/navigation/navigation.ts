import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation  implements OnInit, OnDestroy {
private map!: L.Map;
  private deliveryMarker!: L.Marker;
  private customerMarker!: L.Marker;
  private routingControl: any;
  private watchId: number | undefined;

  // Replace with API values
  private customerCoords: [number, number] = [24.79794357578802, 88.93455712997742];


 redIcon = L.icon({
  iconUrl: 'img/marker-xxl.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

  ngOnInit(): void {
     this.initMap();
    this.addCustomerMarker();
    this.trackDeliveryMan();
  }

  ngOnDestroy(): void {
    if (this.watchId !== undefined) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView(this.customerCoords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addCustomerMarker(): void {
    this.customerMarker = L.marker(this.customerCoords,{icon:this.redIcon})
      .addTo(this.map)
      .bindPopup('Customer Location')
      .openPopup();
  }

  private trackDeliveryMan(): void {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        const latlng: [number, number] = [position.coords.latitude, position.coords.longitude];

        // Add marker first time
        if (!this.deliveryMarker) {
          this.deliveryMarker = L.marker(latlng, { icon: this.getDeliveryIcon() })
            .addTo(this.map)
            .bindPopup('You are here')
            .openPopup();
        } else {
          this.deliveryMarker.setLatLng(latlng);
        }

        this.map.panTo(latlng);

        // Draw route
        if (this.routingControl) {
          this.routingControl.setWaypoints([latlng, this.customerCoords]);
        } else {
          this.routingControl = (L as any).Routing.control({
            waypoints: [latlng, this.customerCoords],
            routeWhileDragging: false,
            show: false,
            addWaypoints: false,
          }).addTo(this.map);
        }
      },
      (error) => console.error('Error getting location:', error),
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }

  startNavigation(): void {
    const [lat, lng] = this.customerCoords;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  }

  private getDeliveryIcon(): L.Icon {
    return L.icon({
      iconUrl: 'img/delivery-man.png', // optional custom icon
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
  }
}
