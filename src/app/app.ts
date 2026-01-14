import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TalabaTableComponent} from './2-lesson/talaba-table/talaba-table';
import {CalculatorComponent} from './1-lesson/calculator/calculator.component';
import {IncreaseComponent} from './1-lesson/increase/increase.component';
import {CrmSystem} from './3-lesson/crm-system/crm-system';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-practice');
}
