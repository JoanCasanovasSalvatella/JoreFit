import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer2Component } from "../footer2/footer2.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, Footer2Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
