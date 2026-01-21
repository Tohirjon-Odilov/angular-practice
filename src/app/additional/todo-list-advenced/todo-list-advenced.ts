import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { TodoList } from "./component/todo-list/todo-list";
import { TodoStats } from "./component/todo-stats/todo-stats";

@Component({
  selector: 'app-todo-list-advenced',
  imports: [Navbar, TodoList, TodoStats],
  templateUrl: './todo-list-advenced.html',
  styleUrl: './todo-list-advenced.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoListAdvenced {

}
