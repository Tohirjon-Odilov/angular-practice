import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-legacy-code',
  imports: [],
  template: `<p>legacy-code works!</p>`,
  styleUrl: './legacy-code.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegacyCode { }
