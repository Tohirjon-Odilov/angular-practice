import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginForma } from "./5-lesson/other/login-forma/login-forma";
import { RegisterForm } from "./5-lesson/other/register-form/register-form";
import { ReactiveForma } from "./5-lesson/other/reactive-forma/reactive-forma";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginForma, RegisterForm, ReactiveForma],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-practice');
}
