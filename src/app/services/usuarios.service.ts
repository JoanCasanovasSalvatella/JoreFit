import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { usuarios } from '../interface/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  //Funcion que obtiene los ejercicios asignador de un plan
  getPlanAsig(): Observable <usuarios>{
    return this.http.get<usuarios>(`$(this.apiUrl)/usuario`);
  }
}
