import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathOperations } from './math-operations/math-operations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MathOperations],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}
