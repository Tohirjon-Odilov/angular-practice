import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout').then((c) => c.Layout),
  },
  {
    path: 'aqilli-qidiruv',
    loadComponent: () =>
      import('./components/aqilli-qidiruv/aqilli-qidiruv').then((c) => c.AqilliQidiruv),
  },
];
