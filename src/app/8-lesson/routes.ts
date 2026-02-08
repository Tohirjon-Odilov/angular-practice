import { Router, Routes, ROUTES } from '@angular/router';

export const routes: Routes = [
  {
    path: 'timer',
    loadComponent: () => import('./component/timer/timer').then((c) => c.Timer),
  },
];
