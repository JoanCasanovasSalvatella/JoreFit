import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ejercicios } from '../interface/ejercicios.interface';
import { ejerAsig } from '../interface/ejerAsig.interface';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

    private apiUrl = 'http://127.0.0.1:8000';
    ejerAsig: ejerAsig;

    constructor(private http: HttpClient) {
      this.ejerAsig = {
        id : 1,
        idPlan: 1,
        idEjer: 1,
        idUsu: 1,
        completado : false
      }
    }

    //Funcion que obtiene los ejercicios asignador de un plan
    getEjercicios(): Observable <ejercicios>{
      return this.http.get<ejercicios>(`$(this.apiUrl)/ejercicios`);
    }

    //Funcion que obtiene los ejercicios asignador de un plan
    getEjerAsig(): Observable <ejerAsig>{
      return this.http.get<ejerAsig>(`$(this.apiUrl)/ejerAsig`);
    }

    mostrarEjercicio(){
      return this.ejerAsig;
    }
}
