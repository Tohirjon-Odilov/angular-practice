import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: "app-increase",
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: "increase.component.html",
  styleUrl: "increase.component.css"
})

export class IncreaseComponent{
  result: number = 0;

  increment() {
    this.result++;
  }

  decrement() {
    this.result--;
  }
}
