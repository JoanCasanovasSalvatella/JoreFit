import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { planes } from '../interface/planes.interface';
import { PlanesService } from '../services/planes.service';

@Component({
  selector: 'app-plam-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './plam-admin.component.html',
  styleUrl: './plam-admin.component.css'
})
export class PlamAdminComponent {
  planes: planes[] = [];

    constructor(private planesService: PlanesService) {
      this.planes = this.planesService.planes;
    }
}
