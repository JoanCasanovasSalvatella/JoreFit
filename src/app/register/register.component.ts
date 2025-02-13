import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer2Component } from "../footer2/footer2.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, Footer2Component],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
