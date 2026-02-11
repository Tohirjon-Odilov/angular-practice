import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Box1 } from "./components/box-1/box-1";
import { Box2 } from "./components/box-2/box-2";

@Component({
  selector: 'app-color-service',
  imports: [Box1, Box2],
  template: `<div class="border border-gray-300 rounded p-2 mt-3">
    <app-box-1/>
    <app-box-2/>
  </div>`,
  styleUrl: './color-service.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorService { }
