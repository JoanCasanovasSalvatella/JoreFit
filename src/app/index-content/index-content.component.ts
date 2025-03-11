import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { planes } from '../interface/planes.interface';
import { PlanesService } from '../services/planes.service';

@Component({
  selector: 'app-index-content',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './index-content.component.html',
  styleUrl: './index-content.component.css'
})
export class IndexContentComponent {
  planes: planes[] = [];

    constructor(private planesService: PlanesService) {
      this.planes = this.planesService.planes;
    }
}
