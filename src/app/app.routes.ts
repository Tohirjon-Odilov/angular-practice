import { Routes } from '@angular/router';
import { authGuard } from './4-lesson/simple-users-app/component/login/auth-guard';
import { leaveGuard } from './4-lesson/simple-users-app/component/login/leave-guard';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { AdditionalLayoutComponent } from './layouts/additional-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./1-lesson/calculator/calculator.component').then((c) => c.CalculatorComponent),
      },
      {
        path: 'increase',
        loadComponent: () =>
          import('./1-lesson/increase/increase.component').then((c) => c.IncreaseComponent),
      },
      {
        path: 'student-table',
        loadComponent: () =>
          import('./2-lesson/talaba-table/talaba-table').then((c) => c.TalabaTableComponent),
      },
      {
        path: 'crm-system',
        loadComponent: () => import('./3-lesson/crm-system/crm-system').then((c) => c.CrmSystem),
      },
      {
        path: 'add-edit-student',
        loadComponent: () =>
          import('./3-lesson/crm-system/components/student-form/student-form').then(
            (c) => c.StudentForm,
          ),
      },
      {
        path: 'add-edit-student/:studentId',
        loadComponent: () =>
          import('./3-lesson/crm-system/components/student-form/student-form').then(
            (c) => c.StudentForm,
          ),
        canDeactivate: [leaveGuard],
      },
      {
        path: 'simple-users-app',
        loadChildren: () =>
          import('./4-lesson/simple-users-app/simple-users-app.routes').then((c) => c.routes),
        canActivate: [authGuard],
      },
      {
        path: 'rxjs',
        loadChildren: () => import('./7-lesson/routes').then((c) => c.routes),
      },
      {
        path: 'signal',
        loadChildren: () => import('./8-lesson/routes').then((c) => c.routes),
      },
    ],
  },
  {
    path: 'additional',
    component: AdditionalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./additional/routes').then((c) => c.routes),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./4-lesson/simple-users-app/component/login/login').then((m) => m.Login),
  },
  {
    path: '**',
    loadComponent: () => import('./notfound/notfound').then((m) => m.Notfound),
  },
];
