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

  constructor(private http: HttpClient) { }

  ejercicios: ejercicios[] = [
    {
      id: 1,
      imagen: 'sentadilla_con_barra.jpg',
      nombres: 'Sentadilla con barra',
      descripcion: 'Ejercicio compuesto para trabajar piernas y glúteos.',
      series: 3,
      repeticiones: '8',
      tipo: 'Ganancia Muscular',
      musculo: 'Cuádriceps, femorales, glúteos',
      intensidad: 'Leve',
    },
    {
      id: 2,
      imagen: 'press_banca_barra.jpg',
      nombres: 'Press de banca con barra',
      descripcion: 'Ejercicio de empuje para trabajar el pecho y los tríceps.',
      series: 3,
      repeticiones: '8',
      tipo: 'Ganancia Muscular',
      musculo: 'Pectorales, tríceps, deltoides anteriores',
      intensidad: 'Leve',
    },
    {
      id: 3,
      imagen: 'remo_barra.jpg',
      nombres: 'Remo con barra',
      descripcion: 'Ejercicio para fortalecer la espalda y bíceps.',
      series: 3,
      repeticiones: '8',
      tipo: 'Ganancia Muscular',
      musculo: 'Dorsales, trapecios, bíceps',
      intensidad: 'Leve',
    },
    {
      id: 4,
      imagen: 'fondos_paralelas.jpg',
      nombres: 'Fondos en paralelas',
      descripcion: 'Ejercicio para trabajar tríceps y pectorales.',
      series: 2,
      repeticiones: '8',
      tipo: 'Ganancia Muscular',
      musculo: 'Tríceps, pectorales',
      intensidad: 'Leve',
    },
    {
      id: 5,
      imagen: 'curl_biceps_barra.jpg',
      nombres: 'Curl de bíceps con barra',
      descripcion: 'Ejercicio de aislamiento para el desarrollo del bíceps.',
      series: 2,
      repeticiones: '10',
      tipo: 'Ganancia Muscular',
      musculo: 'Bíceps',
      intensidad: 'Leve',
    }
  ];

  getEjerNivel(intensidad: string, tipo: string | undefined): ejercicios[]{
    return this.ejercicios.filter((ejercicio) => ejercicio.intensidad === intensidad && ejercicio.tipo === tipo);
  }

  //Funcion que obtiene los ejercicios asignador de un plan
  getEjercicios(): Observable <ejercicios>{
    return this.http.get<ejercicios>(`$(this.apiUrl)/ejercicios`);
  }

  //Funcion que obtiene los ejercicios asignador de un plan
  getEjerAsig(): Observable <ejerAsig>{
    return this.http.get<ejerAsig>(`$(this.apiUrl)/ejerAsig`);
  }
}
