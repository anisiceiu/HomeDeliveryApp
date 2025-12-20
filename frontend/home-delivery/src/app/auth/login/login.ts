import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loading = false;
  error = '';
  form!:FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

this.form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  }





  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    this.auth.login(this.form.getRawValue()).subscribe({
      next: res => {
        this.loading = false;

        // Redirect by role
        switch (res.role) {
          case 'Admin':
            this.router.navigate(['/admin/dashboard']);
            break;
          case 'Vendor':
            this.router.navigate(['/vendor/dashboard']);
            break;
          case 'Delivery':
            this.router.navigate(['/delivery/dashboard']);
            break;
          default:
            this.router.navigate(['/']);
        }
      },
      error: err => {
        this.loading = false;
        this.error = err.error || 'Invalid email or password';
      }
    });
  }
}
