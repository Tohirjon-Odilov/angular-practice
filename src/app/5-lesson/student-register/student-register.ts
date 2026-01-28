import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-student-register',
  imports: [],
  template: `<p>student-register works!</p>`,
  styleUrl: './student-register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentRegister { }
