import {Routes} from '@angular/router';
import {authGuard} from './4-lesson/simple-users-app/component/login/auth-guard';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./#header/header").then(c => c.Header)
  },
  {
    path: "calculator",
    loadComponent: () => import('./1-lesson/calculator/calculator.component').then(c => c.CalculatorComponent)
  },
  {
    path: "increase",
    loadComponent: () => import('./1-lesson/increase/increase.component').then(c => c.IncreaseComponent)
  },
  {
    path: "student-table",
    loadComponent: () => import('./2-lesson/talaba-table/talaba-table').then(c => c.TalabaTableComponent)
  },
  {
    path: "crm-system",
    loadComponent: () => import('./3-lesson/crm-system/crm-system').then(c => c.CrmSystem)
  },
  {
    path: "add-edit-student",
    loadComponent: () => import('./3-lesson/crm-system/components/student-form/student-form').then(c => c.StudentForm)
  },
  {
    path: "add-edit-student/:studentId",
    loadComponent: () => import('./3-lesson/crm-system/components/student-form/student-form').then(c => c.StudentForm)
  },
  {
    path: "simple-users-app",
    loadChildren: () => import('./4-lesson/simple-users-app/simple-users-app.routes').then(c => c.routes),
    canActivate: [authGuard]
  },
  {
    path: "login",
    loadComponent: () => import("./4-lesson/simple-users-app/component/login/login").then(m => m.Login),
  },
];
