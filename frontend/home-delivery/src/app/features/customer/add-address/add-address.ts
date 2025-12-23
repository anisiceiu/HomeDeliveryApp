import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from "../../../shared/material/material-module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-address',
  imports: [ReactiveFormsModule, MaterialModule,CommonModule],
  templateUrl: './add-address.html',
  styleUrl: './add-address.css',
})
export class AddAddress {
 addressForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
    this.addressForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      streetAddress: ['', Validators.required],
      apartment: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

   onSubmit() {
    if (this.addressForm.valid) {
      console.log('Form Value:', this.addressForm.value);
    }
  }
  
}
