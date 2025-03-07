import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { planes } from '../interface/planes.interface';
import { planesAsig } from '../interface/planesAsig.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  planes: planes[] = [
    {
      id: 1,
      imagen: "assets/ganaciaMuscular.jfif",
      nombre: "Ganancia Muscular",
      descripcion: "Plan enfocado en el aumento de masa muscular con ejercicios de fuerza progresiva.",
      duracion: 12,
      precio: 50
    },
    {
      id: 2,
      imagen: "assets/ejercicioCardiobascular.jpg",
      nombre: "Ejercicio Cardiovascular",
      descripcion: "Programa diseñado para mejorar la resistencia cardiovascular con entrenamientos HIIT y LISS.",
      duracion: 8,
      precio: 40
    },
    {
      id: 3,
      imagen: "assets/perdidaDePeso.webp",
      nombre: "Pérdida De Peso",
      descripcion: "Entrenamiento para la reducción de grasa corporal con una combinación de fuerza y cardio.",
      duracion: 10,
      precio: 45
    },
    {
      id: 4,
      imagen: "assets/definicion.jpg",
      nombre: "Definición",
      descripcion: "Plan para mantener masa muscular mientras se reduce la grasa corporal.",
      duracion: 10,
      precio: 55
    }
  ];

  //Funcion que obtiene los ejercicios asignador de un plan
  getPlanes(): Observable <planes>{
    return this.http.get<planes>(`$(this.apiUrl)/planes`);
  }

  getPlan(name: string): planes | undefined{
    return this.planes.find((plan) => plan.nombre === name);
  }

  //Funcion que obtiene los ejercicios asignador de un plan
  getPlanAsig(): Observable <planesAsig>{
    return this.http.get<planesAsig>(`$(this.apiUrl)/planAsig`);
  }
}
