import { Component } from '@angular/core';
import { Footer2Component } from "../footer2/footer2.component";
import { UsuariosService } from '../services/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [Footer2Component, RouterLink],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  constructor(public usuarios: UsuariosService){}
}
