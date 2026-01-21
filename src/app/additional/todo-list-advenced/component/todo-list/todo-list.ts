import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { ITodo } from '../../todo.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoList implements OnInit, OnDestroy {
  private todoService = inject(TodoService);
  private subscription!: Subscription;
  todos: ITodo[] = [];

  ngOnInit(): void {
    this.subscription = this.todoService.todos$.subscribe(
      todos => {
        this.todos = todos;
        console.log(this.todos);
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
