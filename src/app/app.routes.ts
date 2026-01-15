import {Routes} from '@angular/router';

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
  }
];
