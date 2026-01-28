import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
  imports: [FormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterForm {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log("Ma'lumotlar:", {
      name: this.name,
      email: this.email,
      password: this.password,
    });

    alert("Ro'yxatdan o'tdingiz!");
  }
}
