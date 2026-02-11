import { Pipe, PipeTransform } from '@angular/core';
import { State } from './todo-list.model';

@Pipe({
  name: 'state',
})
export class StatePipe implements PipeTransform {
  transform(value: State): unknown {
    switch (value) {
      case State.Completed:
        return 'Completed';
      case State.InProgress:
        return 'InProgress';
      case State.Waiting:
        return 'Waiting';
      default:
        return 'No malum';
    }
  }
}
