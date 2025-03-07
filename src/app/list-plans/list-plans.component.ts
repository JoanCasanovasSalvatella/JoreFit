import { Component } from '@angular/core';
import { Footer2Component } from "../footer2/footer2.component";
import { planes } from '../interface/planes.interface';
import { PlanesService } from '../services/planes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-plans',
  standalone: true,
  imports: [Footer2Component, CommonModule, FormsModule],
  templateUrl: './list-plans.component.html',
  styleUrl: './list-plans.component.css'
})
export class ListPlansComponent {
  planes: planes[] = [];

  constructor(private planesService: PlanesService) {
    this.planes = this.planesService.planes;
  }
}
