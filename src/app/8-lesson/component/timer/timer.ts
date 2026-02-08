import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TimerService } from './timer.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DividerModule} from "primeng/divider"
import { FormatTimerPipe } from "./formatTimer-pipe";

@Component({
  selector: 'app-timer',
  imports: [CommonModule, ButtonModule, InputTextModule, FormsModule, DividerModule, FormatTimerPipe],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timer {
  private timerService = inject(TimerService);
  inputToggle: boolean = false;
  timerValue: number = 0;

  timer$ = this.timerService.timer;

  start(timerValue: number = 0) {
    this.inputToggle = true;
    this.timerService.start(timerValue);
  }

  stop() {
    this.inputToggle = false;
    this.timerService.stop();
  }

  reset() {
    this.stop();
    this.timerValue = 0;
    this.timerService.reset();
  }
}
