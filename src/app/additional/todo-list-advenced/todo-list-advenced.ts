import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-todo-list-advenced',
  imports: [Navbar],
  templateUrl: './todo-list-advenced.html',
  styleUrl: './todo-list-advenced.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoListAdvenced {
  
}
