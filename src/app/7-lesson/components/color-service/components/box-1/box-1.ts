import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-box-1',
  imports: [],
  template: `<div class="flex gap-2 mb-3">
    <button class="bg-red-400 text-white p-4 px-8" (click)="changeColor('red')"></button>
    <button class="bg-blue-400 text-white p-4 px-8" (click)="changeColor('blue')"></button>
    <button class="bg-green-400 text-white p-4 px-8" (click)="changeColor('green')"></button>
    <button class="bg-yellow-400 text-white p-4 px-8" (click)="changeColor('yellow')"></button>
  </div>`,
  styleUrl: './box-1.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Box1 {
  private color$ = inject(SettingsService)

  changeColor(newVal: string) {
    this.color$.changeStatus(newVal)
  }
}
