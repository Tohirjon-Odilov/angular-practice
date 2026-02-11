import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  template: `<p>counter-app works!</p>`,
  styleUrl: './counter-app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterApp { }
