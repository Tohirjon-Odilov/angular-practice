import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-operator-practice',
  imports: [AsyncPipe],
  template: ` <div class="border border-gray-300 flex gap-2 p-2 rounded">
    @for (item of data$ | async; track i; let i = $index) {
      <p>{{ item }}</p>
    }
  </div>`,
  styleUrl: './operator-practice.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorPractice {
  data$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
    map((numbers) => {
      return numbers.filter((n) => n % 2 !== 0).map((n) => n ** 2);
    }),
  );
}
