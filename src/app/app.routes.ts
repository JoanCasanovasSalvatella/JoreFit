import { Routes } from '@angular/router';
import { IndexContentComponent } from './index-content/index-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    title: 'JoreFit - INICIO',
    component: IndexContentComponent // Página principal
  },
  {
    path: 'login',
    title: 'JoreFit - INICIO DE SESION',
    component: LoginComponent // Página principal
  },
  {
    path: 'register',
    title: 'JoreFit - REGISTRO',
    component: RegisterComponent // Página principal
  },
];
