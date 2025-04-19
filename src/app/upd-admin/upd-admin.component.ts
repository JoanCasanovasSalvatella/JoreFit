import { Component } from '@angular/core';
import { Footer2Component } from "../footer2/footer2.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upd-admin',
  standalone: true,
  imports: [Footer2Component, RouterLink],
  templateUrl: './upd-admin.component.html',
  styleUrl: './upd-admin.component.css'
})
export class UpdAdminComponent {

}
