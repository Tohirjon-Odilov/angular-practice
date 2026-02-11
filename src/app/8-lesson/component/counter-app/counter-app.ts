import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-counter-app',
  imports: [Button],
  template: `
    <div class="border border-gray-400 p-2 rounded">
      <h2 class="text-2xl mb-2">Counter app</h2>
      <div class="flex gap-2">
        <p class="text-xl mb-2">{{ num() }}</p>
        <span>|</span>
        <p class="text-xl">{{ double() }}</p>
        <p class="text-xl">{{ triple() }}</p>
      </div>
      <p-button class="mr-2" (onClick)="increment()">Increment</p-button>
      <p-button class="" severity="danger" (onClick)="decrement()">Decrement</p-button>
      <p-button class="ml-2" severity="info" (onClick)="reset()">Reset</p-button>
    </div>
  `,
  styleUrl: './counter-app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterApp {
  num = signal<number>(0);

  double = computed(() => this.num() * 2);
  triple = computed(() => this.num() * 3);

  constructor() {
    effect(() => {
      localStorage.setItem('number', this.num.toString());
    });
  }

  increment() {
    this.num.update((n) => n + 1);
  }

  decrement() {
    this.num.update((n) => n - 1);
  }

  reset() {
    this.num.set(0);
  }
}
