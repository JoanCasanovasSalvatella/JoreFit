import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { usuarios } from '../interface/usuarios.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-user-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.css'
})
export class UserAdminComponent {
  filtroUsuario: string = '';
  isOpen = false; // Estado del menú

  clientes: usuarios[] = [];

  constructor(private userService: UsuariosService) {
    //Declaramos variables
    var side_menu = document.getElementById("side_menu");
    var actionBtn = document.getElementById("btn_open");
    var body = document.getElementById("body");
  }
}
