import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TalabaTableComponent} from './talaba-table/talaba-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TalabaTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}
