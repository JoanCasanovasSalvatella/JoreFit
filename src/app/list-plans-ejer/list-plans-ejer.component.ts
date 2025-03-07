import { Component } from '@angular/core';
import { planes } from '../interface/planes.interface';
import { ActivatedRoute } from '@angular/router';
import { PlanesService } from '../services/planes.service';
import { EjerciciosService } from '../services/ejercicios.service';
import { ejerAsig } from '../interface/ejerAsig.interface';
import { ejercicios } from '../interface/ejercicios.interface';

@Component({
  selector: 'app-list-plans-ejer',
  standalone: true,
  imports: [],
  templateUrl: './list-plans-ejer.component.html',
  styleUrl: './list-plans-ejer.component.css'
})
export class ListPlansEjerComponent {
  selectedPlan?: planes;
  selectedEjercicios : ejercicios [] = [];
  selectedNivel: string = 'Leve';

  constructor(private route: ActivatedRoute,
    private planesService: PlanesService,
    private ejerciciosService: EjerciciosService) {
      const planId = route.snapshot.params['planId'];
      this.selectedPlan = this.planesService.getPlan(planId);
      this.selectedEjercicios = this.ejerciciosService.getEjerNivel(this.selectedNivel, this.selectedPlan?.nombre);
    }
}
