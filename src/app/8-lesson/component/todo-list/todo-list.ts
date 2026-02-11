import { ChangeDetectionStrategy, Component, computed, effect, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { State, TodoModel } from './todo-list.model';
import { DatePipe } from '@angular/common';
import { StatePipe } from './todo-list.pipe';

@Component({
  selector: 'app-todo-list',
  imports: [SelectButton, FormsModule, DatePipe, StatePipe, TableModule],
  template: `
    <div class="border border-gray-400 rounded p-5 mt-5">
      <h2 class="text-2xl">Todo list</h2>

      <p-selectbutton
        [options]="stateOptions"
        [(ngModel)]="selectedState"
        optionLabel="label"
        optionValue="value"
        aria-labelledby="basic"
        class="mb-2"
      />

      <p-table
        [value]="filteredToDo()"
        [tableStyle]="{ 'min-width': '60rem' }"
        [stripedRows]="true"
        [showGridlines]="true"
      >
        <ng-template pTemplate="header">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>State</th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-item>
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.date | date: 'dd/MM/yyyy' }}</td>
            <td>{{ item.state | state }}</td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  styleUrl: './todo-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoList {
  toDoList = signal<TodoModel[]>([
    {
      name: 'Tonggi yugurish',
      description: '30 daqiqa kardio va nafas mashqlari',
      date: new Date(2026, 2, 4, 5, 30),
      state: State.Completed,
    },
    {
      name: 'Kitob o‘qish',
      description: 'Kamida 20 bet (self-development yoki texnik kitob)',
      date: new Date(2026, 2, 4, 6, 15),
      state: State.Completed,
    },
    {
      name: 'Nonushta',
      description: 'Proteinli va foydali ovqat',
      date: new Date(2026, 2, 4, 7, 0),
      state: State.Completed,
    },
    {
      name: 'Asosiy ish (Frontend / Angular)',
      description: '2–3 soat chuqur fokus rejimida ishlash',
      date: new Date(2026, 2, 4, 9, 0),
      state: State.InProgress,
    },
    {
      name: 'Backend mashq (.NET)',
      description: 'API yoki kichik feature ustida ishlash',
      date: new Date(2026, 2, 4, 12, 0),
      state: State.Waiting,
    },
    {
      name: 'Sport (suzish yoki kamida 20 min mashq)',
      description: 'Tana va intizom uchun',
      date: new Date(2026, 2, 4, 17, 30),
      state: State.Waiting,
    },
    {
      name: 'Kechki reja va refleksiya',
      description: 'Bugun nima o‘rgandim? 10 daqiqa yozish',
      date: new Date(2026, 2, 4, 21, 0),
      state: State.Waiting,
    },
    {
      name: 'Uxlash',
      description: 'Kamida 7-8 soat sifatli uyqu',
      date: new Date(2026, 2, 4, 23, 0),
      state: State.Waiting,
    },
  ]);

  stateOptions = [
    {
      label: 'Default',
      value: State.Reset,
    },
    {
      label: 'Waiting',
      value: State.Waiting,
    },
    {
      label: 'InProgress',
      value: State.InProgress,
    },
    {
      label: 'Completed',
      value: State.Completed,
    },
  ];

  saved = localStorage.getItem('selected-state') as State | null;

  selectedState = model<State | null>(
    this.saved && Object.values(State).includes(this.saved) ? this.saved : State.Waiting
  );

  constructor() {
    console.log(this.selectedState());

    effect(() => {
      const state = this.selectedState();

      if (state) {
        localStorage.setItem('selected-state', state.toString());
      } else {
        localStorage.setItem('selected-state', 'not selected');
      }
    });
  }

  filteredToDo = computed(() => {
    const state = this.selectedState();
    if (!state) return this.toDoList();

    return this.toDoList().filter((x) => {
      if(state == State.Reset){
        return true
      }

      return x.state == state
    });
  });
}
