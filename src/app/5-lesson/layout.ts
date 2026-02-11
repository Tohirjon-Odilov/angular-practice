import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StudentRegister } from './student-register/student-register';
import { RegisterForm } from './other/register-form/register-form';
import { LoginForma } from './other/login-forma/login-forma';
import { ReactiveForma } from './other/reactive-forma/reactive-forma';

@Component({
  selector: 'app-layout',
  imports: [StudentRegister, RegisterForm, LoginForma, ReactiveForma],
  template: `
    <div class="container">
      <app-student-register />
      <app-login-forma />
      <app-reactive-forma />
      <app-register-form />
    </div>
  `,
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
