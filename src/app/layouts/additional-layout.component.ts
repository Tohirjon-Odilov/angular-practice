import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../additional/navbar/navbar';

@Component({
  selector: 'app-additional-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
    <div class="mt-20">
      <app-navbar />
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AdditionalLayoutComponent {}
