import { Routes } from '@angular/router';
import { IndexContentComponent } from './index-content/index-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListPlansComponent } from './list-plans/list-plans.component';

export const routes: Routes = [
  {
    path: '',
    title: 'JoreFit - INICIO',
    component: IndexContentComponent
  },
  {
    path: 'login',
    title: 'JoreFit - INICIO DE SESION',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'JoreFit - REGISTRO',
    component: RegisterComponent
  },
  {
    path: 'listPlans',
    title: 'JoreFit - LISTA DE PLANES',
    component: ListPlansComponent
  }
];
