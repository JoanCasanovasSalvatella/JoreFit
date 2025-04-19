import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ejercicios } from '../interface/ejercicios.interface';
import { planes } from '../interface/planes.interface';
import { EjerciciosService } from '../services/ejercicios.service';
import { PlanesService } from '../services/planes.service';

@Component({
  selector: 'app-ejer-asig',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ejer-asig.component.html',
  styleUrl: './ejer-asig.component.css'
})
export class EjerAsigComponent {
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
