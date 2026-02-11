import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AqilliQidiruv } from "./components/aqilli-qidiruv/aqilli-qidiruv";
import { OperatorPractice } from "./components/operator-practice/operator-practice";

@Component({
  selector: 'app-layout',
  imports: [AqilliQidiruv, OperatorPractice],
  template: `
  <div class="container">
    <app-aqilli-qidiruv/>
    <app-operator-practice/>
  </div>`,
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout { }
