import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterApp } from './component/counter-app/counter-app';
import { TodoList } from './component/todo-list/todo-list';
import { ThemeSwitcher } from './component/theme-switcher/theme-switcher';
import { Header } from "../#header/header";

@Component({
  selector: 'app-layout',
  imports: [CounterApp, TodoList, ThemeSwitcher],
  template: `
  <div class="container">
    <!-- <app-header/> -->
    <app-counter-app />
    <app-todo-list />
    <app-theme-switcher />
  </div>`,
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
