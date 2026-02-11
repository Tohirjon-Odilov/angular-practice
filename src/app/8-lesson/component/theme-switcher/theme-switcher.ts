import { ChangeDetectionStrategy, Component, effect, model, signal } from '@angular/core';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

interface Theme {
  label: string;
  value: string;
}

@Component({
  selector: 'app-theme-switcher',
  imports: [SelectButton, FormsModule, NgClass],
  template: ` <div class="border border-gray-400 rounded p-4 mt-5 transition-all" [ngClass]="selectedTheme()">
    <h2 class="text-2xl mb-3">Theme switcher</h2>
    <p-selectbutton
      [options]="themes()"
      [(ngModel)]="selectedTheme"
      optionLabel="label"
      optionValue="value"
      aria-labelledby="basic"
    />
  </div>`,
  styleUrl: './theme-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcher {
  themes = signal<Theme[]>([
    {
      label: 'Light',
      value: 'light',
    },
    {
      label: 'Dark',
      value: 'dark',
    },
  ]);

  selectedTheme = model<string>(localStorage.getItem('theme') || 'light');

  constructor() {
    effect(() => {
      const theme = this.selectedTheme();
      localStorage.setItem('theme', theme);
    });
  }
}
