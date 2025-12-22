import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material-module';


@Component({
  standalone: true,
  selector: 'app-auth-layout',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

}
