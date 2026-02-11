import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AqilliQidiruv } from "./components/aqilli-qidiruv/aqilli-qidiruv";
import { OperatorPractice } from "./components/operator-practice/operator-practice";
import { ColorService } from "./components/color-service/color-service";

@Component({
  selector: 'app-layout',
  imports: [AqilliQidiruv, OperatorPractice, ColorService],
  template: `
  <div class="container">
    <app-aqilli-qidiruv/>
    <app-operator-practice/>
    <app-color-service/>
  </div>`,
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout { }
