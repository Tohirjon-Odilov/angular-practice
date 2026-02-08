import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../#header/header';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
    <div class="mt-20">
      <app-header />
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainLayoutComponent {}
