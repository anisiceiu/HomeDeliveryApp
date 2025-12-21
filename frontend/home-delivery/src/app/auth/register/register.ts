import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Role } from '../../Role';
import { confirmPasswordValidator } from './confirm-password.validator';
import { MaterialModule } from "../../shared/material/material-module";

@Component({
  selector: 'app-register',
  imports: [RouterModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 form!:FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

this.form = this.fb.nonNullable.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confurmPassword:['',Validators.required],
    role:[Role.Customer,Validators.required]
  },{
      validators: confirmPasswordValidator('password', 'confirmPassword')
    });
  }



  submit() {
    if (this.form.invalid) return;

    let data= this.form.getRawValue();
    data.fullName = data.firstName + ' '+ data.lastName;

    this.auth.register(data).subscribe({
      next:res=>{
         alert('Successfully registered.');
      },
      error:err=>{
        alert(err);
      }
    })
  }
}
