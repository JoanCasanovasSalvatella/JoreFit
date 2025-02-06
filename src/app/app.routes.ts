import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexContentComponent } from './index-content/index-content.component';

export const routes: Routes = [
  {
    path: '',
    title: 'JoreFit',
    component: AppComponent // Página principal
  },
  {
    path: '',
    title: 'JoreFit',
    component: IndexContentComponent // Página principal
  },

];
