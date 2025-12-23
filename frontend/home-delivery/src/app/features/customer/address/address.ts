import { Component } from '@angular/core';
import { MaterialModule } from "../../../shared/material/material-module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  imports: [MaterialModule,CommonModule],
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {
items = [
  { id: 1, title: 'Home', subtitle: '123 Main Street, Dhaka, Bangladesh' },
  { id: 2, title: 'Work', subtitle: '456 Park Avenue, Chittagong, Bangladesh' },
  { id: 3, title: `Mom's Home`, subtitle: '789 Lake Road, Sylhet, Bangladesh' }
];

edit(item: any) {
  console.log('Edit', item);
}

select(item: any) {
  console.log('Select', item);
}
}
