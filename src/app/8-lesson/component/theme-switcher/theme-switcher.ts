import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  template: `<p>theme-switcher works!</p>`,
  styleUrl: './theme-switcher.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcher { }
