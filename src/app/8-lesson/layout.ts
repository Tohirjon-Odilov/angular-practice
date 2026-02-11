import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterApp } from './component/counter-app/counter-app';
import { TodoList } from './component/todo-list/todo-list';
import { ThemeSwitcher } from './component/theme-switcher/theme-switcher';
import { Timer } from './component/timer/timer';

@Component({
  selector: 'app-layout',
  imports: [CounterApp, TodoList, ThemeSwitcher, Timer],
  template: ` <div class="container">
    <app-timer />
    <app-counter-app />
    <app-todo-list />
    <app-theme-switcher />
  </div>`,
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
