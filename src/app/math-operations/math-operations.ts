import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math-operations',
  imports: [FormsModule],
  templateUrl: './math-operations.html',
  styleUrl: './math-operations.css',
})
export class MathOperations {
  son1 = signal<number>(0);
  son2 = signal<number>(0);
  natija = signal<number>(0);

  qoshish() {
    this.natija.set(this.son1() + this.son2());
  }

  ayirish() {
    this.natija.set(this.son1() - this.son2());
  }

  kopaytirish() {
    this.natija.set(this.son1() * this.son2());
  }

  bolish() {
    if (this.son2() !== 0) {
      this.natija.set(this.son1() / this.son2());
    } else {
      this.natija.set(0);
    }
  }
}
