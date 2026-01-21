import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  template: `<p>todo-item works!</p>`,
  styleUrl: './todo-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItem { }
