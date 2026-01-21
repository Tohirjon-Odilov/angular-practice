import { Injectable } from '@angular/core';
import { ICategory, ITodo, ITodoStats } from './todo.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<ITodo[]>([
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, eggs, bread',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      priority: 'medium',
      status: 'pending',
      category: 'Shopping',
    },
    {
      id: 2,
      title: 'Finish Angular homework',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      priority: 'high',
      status: 'in-progress',
      category: 'Work',
    },
    {
      id: 3,
      title: 'Schedule dentist appointment',
      completed: false,
      createdAt: new Date(),
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      priority: 'low',
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

  addTodo(todo: ITodo): void {
    const todos = this.todosSubject.value;
    const newTodo = {
      ...todo,
      id: this.generateId(),
    };
    this.todosSubject.next([...todos, newTodo]);
  }

  toggleTodo(id: number): void {
    const todos = this.todosSubject.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(todos);
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

  getTodosByStatus(status: string): Observable<ITodo[]> {
    return this.todos$.pipe(
      map((todos) => todos.filter((todo) => todo.status === status))
    );
  }

  getTodosByCategory(category: string): Observable<ITodo[]> {
    return this.todos$.pipe(
      map((todos) => todos.filter((todo) => todo.category === category))
    );
  }

  getTodosByPriority(priority: 'low' | 'medium' | 'high'): Observable<ITodo[]> {
    return this.todos$.pipe(
      map((todos) => todos.filter((todo) => todo.priority === priority))
    );
  }

  getTodosSortedByDeadline(order: 'asc' | 'desc' = 'asc'): Observable<ITodo[]> {
    return this.todos$.pipe(
      map((todos) => {
        const sorted = [...todos].sort((a, b) => {
          return order === 'asc'
            ? a.deadline.getTime() - b.deadline.getTime()
            : b.deadline.getTime() - a.deadline.getTime();
        });
        return sorted;
      })
    );
  }

  getTodosSortedByPriority(): Observable<ITodo[]> {
    return this.todos$.pipe(
      map((todos) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return [...todos].sort(
          (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        );
      })
    );
  }

  getStats(): Observable<ITodoStats> {
    return this.todos$.pipe(
      map((todos) => ({
        total: todos.length,
        completed: todos.filter((t) => t.completed).length,
        remaining: todos.filter((t) => !t.completed).length,
        byCategory: this.countByCategory(todos),
        byPriority: this.countByPriority(todos),
      }))
    );
  }

  private countByCategory(todos: ITodo[]): Record<string, number> {
    return todos.reduce((acc, todo) => {
      const category = todo.category || 'Uncategorized';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  private countByPriority(todos: ITodo[]): Record<'low' | 'medium' | 'high', number> {
    return {
      low: todos.filter((t) => t.priority === 'low').length,
      medium: todos.filter((t) => t.priority === 'medium').length,
      high: todos.filter((t) => t.priority === 'high').length,
    };
  }

  //================== Category =========================
  getCategories(): ICategory[] {
    return this.categoriesSubject.value;
  }

  addCategories(category: ICategory): void {
    const categories = this.categoriesSubject.value;
    const newCategory = {
      ...category,
      id: this.generateId(),
    };
    this.categoriesSubject.next([...categories, newCategory]);
  }

  updateCategory(id: number, updateCategory: ICategory): void {
    const categories = this.categoriesSubject.value;
    const updatedCategories = categories.map((category) =>
      category.id === id ? { ...updateCategory, id } : category,
    );
    this.categoriesSubject.next(updatedCategories);
  }

  deleteCategory(id: number): void {
    const categories = this.categoriesSubject.value;
    const filteredCategories = categories.filter((category) => category.id !== id);
    this.categoriesSubject.next(filteredCategories);
  }
}
