import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: 'calculator.component.css',
  imports: [
    FormsModule,
    NgClass
  ]
})

export class CalculatorComponent{
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  errorMessage: string | null = null;

  qushish() {
    this.errorMessage = null;
    this.result = this.num1 + this.num2;
  }

  ayirish() {
    this.errorMessage = null;
    this.result = this.num1 - this.num2;
  }

  kupaytirish() {
    this.errorMessage = null;
    this.result = this.num1 * this.num2;
  }

  bulish() {
    this.errorMessage = null;
    if(this.num2 === 0){
      this.errorMessage = "Nolga bo'lish mumkin emas! 🚫";
      this.result = 0;
      return;
    }
    this.result = this.num1 / this.num2;
    this.errorMessage = null;
  }

  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = null;
    this.errorMessage = null;
  }
}
