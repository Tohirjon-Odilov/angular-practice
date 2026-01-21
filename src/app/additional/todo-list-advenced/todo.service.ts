import { Injectable } from '@angular/core';
import { ITodo } from './todo.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  private todosSubject = new BehaviorSubject<ITodo[]>([
    {
      id: 1,
      title: 'Buy groceries',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      prioritet: 'medium',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Finish Angular homework',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      prioritet: 'high',
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Schedule dentist appointment',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      prioritet: 'low',
      status: 'pending',
    },
  ])

  constructor() {}
}
