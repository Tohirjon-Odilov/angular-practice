import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-stats',
  imports: [],
  template: `<p>todo-stats works!</p>`,
  styleUrl: './todo-stats.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoStats { }
