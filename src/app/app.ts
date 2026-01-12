import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {IncreaseComponent} from './increase/increase.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorComponent, IncreaseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}
