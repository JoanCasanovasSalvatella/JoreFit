import { Component } from '@angular/core';
import { Footer2Component } from "../footer2/footer2.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [Footer2Component, RouterLink],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {

}
