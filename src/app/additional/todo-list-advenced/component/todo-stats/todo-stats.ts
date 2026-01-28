import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-stats',
  imports: [],
  templateUrl: './todo-stats.html',
  styleUrl: './todo-stats.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoStats { }
