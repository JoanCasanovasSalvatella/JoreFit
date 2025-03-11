import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { usuarios } from '../interface/usuarios.interface';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://127.0.0.1:8000';
  users: usuarios;

  constructor(private http: HttpClient) {
    this.users = {
      id : 1,
      usuario: 'Ampu',
      contrasena: '1234',
      nombre: 'Amaia',
      apellido: 'Pujol',
      fecha_nacimiento: new Date('01-01-2020'), //Formato de fechas
      altura: 160,
      pesoActual:63,
      pesoObjetivo: 70,
      nivel: 'Aficionado',
      rol: 'Usuario',
      numero_tarjeta: '1234-5678-9012-3456',
      nombre_titular: 'Amaia',
      cvv: '122',
      fecha_vencimiento: new Date('01-05-2026')
    }
   }

  //Funcion que obtiene los datos de un usuario
  getUser(): Observable <usuarios>{
    return this.http.get<usuarios>(`$(this.apiUrl)/usuario`);
  }

  //Función de prueba que muestra los datos del constructor
  getData(){
    return this.users;//Devuelve el contenido de users
  }
}
