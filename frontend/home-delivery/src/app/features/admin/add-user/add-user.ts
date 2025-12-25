import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from "../../../shared/material/material-module";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-add-user',
  imports: [MaterialModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  form!:FormGroup;

constructor(private fb: FormBuilder,private auth:AuthService) {}

ngOnInit()
{
  this.form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]]
  });
}


  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.auth.register(this.form.getRawValue()).subscribe(data=>{
     alert("Success");
    });
  }
}
