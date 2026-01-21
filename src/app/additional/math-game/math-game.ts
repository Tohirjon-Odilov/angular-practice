import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-math-game',
  imports: [Navbar],
  template: `<app-navbar/>`,
  styleUrl: './math-game.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MathGame { }
