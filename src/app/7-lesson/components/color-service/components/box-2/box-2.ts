import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../settings.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-box-2',
  imports: [NgClass, AsyncPipe],
  template: `<div class="box rounded w-full h-52" [ngClass]="color$ | async"></div>`,
  styleUrl: './box-2.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Box2 {
  color$ = inject(SettingsService).themeColor$;
}
