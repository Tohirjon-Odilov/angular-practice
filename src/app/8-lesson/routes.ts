import { Router, Routes, ROUTES } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./layout').then(c => c.Layout)
  },
  // {
  //   path: 'timer',
  //   loadComponent: () => import('./component/timer/timer').then((c) => c.Timer),
  // },
  // {
  //   path: 'counter',
  //   loadComponent: () => import('./component/counter-app/counter-app').then((c) => c.CounterApp),
  // },
  // {
  //   path: 'todolist',
  //   loadComponent: () => import('./component/todo-list/todo-list').then((c) => c.TodoList),
  // },
  // {
  //   path: 'theme-switcher',
  //   loadComponent: () =>
  //     import('./component/theme-switcher/theme-switcher').then((c) => c.ThemeSwitcher),
  // },
];
