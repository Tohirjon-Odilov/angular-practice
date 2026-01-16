import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./component/home/home").then(m => m.Home),
  },
  {
    path: "users",
    loadComponent: () => import("./component/users/users").then(m => m.Users),
  },
  {
    path: "users/:id",
    loadComponent: () => import("./component/user-detail/user-detail").then(m => m.UserDetail),
  }
]
