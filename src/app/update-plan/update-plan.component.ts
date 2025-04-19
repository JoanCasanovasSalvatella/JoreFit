import { Component } from '@angular/core';
import { planes } from '../interface/planes.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlanesService } from '../services/planes.service';
import { EjerciciosService } from '../services/ejercicios.service';
import { ejercicios } from '../interface/ejercicios.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-plan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './update-plan.component.html',
  styleUrl: './update-plan.component.css'
})
export class UpdatePlanComponent {
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
