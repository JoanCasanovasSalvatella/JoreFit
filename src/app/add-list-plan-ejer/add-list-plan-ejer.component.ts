import { Component } from '@angular/core';
import { planes } from '../interface/planes.interface';
import { PlanesService } from '../services/planes.service';
import { EjerciciosService } from '../services/ejercicios.service';
import { ejercicios } from '../interface/ejercicios.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-list-plan-ejer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-list-plan-ejer.component.html',
  styleUrl: './add-list-plan-ejer.component.css'
})
export class AddListPlanEjerComponent {
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
