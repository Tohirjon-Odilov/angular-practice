import { Router, Routes, ROUTES } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./layout').then(c => c.Layout)
  },
];
