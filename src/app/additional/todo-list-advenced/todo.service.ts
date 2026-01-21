import { Injectable } from '@angular/core';
import { ICategory, ITodo } from './todo.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  private todosSubject = new BehaviorSubject<ITodo[]>([
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, eggs, bread',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      prioritet: 'medium',
      status: 'pending',
      category: 'Shopping',
    },
    {
      id: 2,
      title: 'Finish Angular homework',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      prioritet: 'high',
      status: 'in-progress',
      category: 'Work',
    },
    {
      id: 3,
      title: 'Schedule dentist appointment',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      prioritet: 'low',
      status: 'pending',
      category: 'Health',
    },
  ]);

  private categoriesSubject = new BehaviorSubject<ICategory[]>([
    { id: 1, name: 'Work', color: '#FF6B6B' },
    { id: 2, name: 'Shopping', color: '#4ECDC4' },
    { id: 3, name: 'Health', color: '#45B7D1' },
    { id: 4, name: 'Personal', color: '#FFA07A' },
  ]);

  todos$ = this.todosSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  constructor() {}

  private generateId(): number {
    const todos = this.todosSubject.value;
    return todos.length > 0 ? Math.max(...todos.map((s) => s.id)) + 1 : 1;
  }

  getCurrentTodos(): ITodo[] {
    return this.todosSubject.value;
  }

  addTodos(todo: ITodo): void {
    const todos = this.todosSubject.value;
    const newTodo = {
      ...todo,
      id: this.generateId(),
    };
    this.todosSubject.next([...todos, newTodo]);
  }

  updateTodo(id: number, updateTodo: ITodo): void {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...updateTodo, id } : todo,
    );
    this.todosSubject.next(updatedTodos);
  }

  deleteTodo(id: number): void {
    const todos = this.todosSubject.value;
    const filteredTodos = todos.filter((todo) => todo.id != id);
    this.todosSubject.next(filteredTodos);
  }

  //================== Category =========================
  getCategories(): ICategory[] {
    return this.categoriesSubject.value;
  }

  addCategories(category: ICategory): void {
    const categories = this.categoriesSubject.value;
    const newCategory = {
      ...category,
      id: this.generateId()
    };
    this.categoriesSubject.next([...categories, newCategory]);
  }

  updateCategory(id: number, updateCategory: ICategory): void {
    const categories = this.categoriesSubject.value;
    const updatedCategories = categories.map((category) =>
      category.id === id ? {...updateCategory, id} : category
    )
    this.categoriesSubject.next(updatedCategories);
  }

  deleteCategory(id: number): void {
    const categories = this.categoriesSubject.value;
    const filteredCategories = categories.filter((category) => category.id !== id);
    this.categoriesSubject.next(filteredCategories);
  }
}
