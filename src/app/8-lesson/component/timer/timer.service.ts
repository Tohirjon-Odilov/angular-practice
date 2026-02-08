import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private _timer = new BehaviorSubject(0);
  private _int = interval(1000);
  private _timerSub: Subscription | undefined = undefined;

  timer = this._timer.asObservable();

  start(timerValue: number = 0) {
    if (!this._timerSub) {
      this._timer.next(timerValue);
      this._timerSub = this._int.subscribe({
        next: () => {
          if (this._timer.value > 0) {
            this._timer.next(this._timer.value - 1);
          } else {
            this.stop();
          }
        },
      });
    }
  }

  stop() {
    if (this._timerSub) {
      this._timerSub.unsubscribe();
      this._timerSub = undefined;
    }
  }

  reset() {
    this.stop();
    this._timer.next(0);
  }
}
