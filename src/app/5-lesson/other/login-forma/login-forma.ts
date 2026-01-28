import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-forma',
  templateUrl: './login.html',
  imports: [FormsModule]
})
export class LoginForma {
  // Forma ma'lumotlari
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Bu yerda login logikasi
    if (this.username === 'admin' && this.password === '123') {
      alert('Muvaffaqiyatli kirdingiz!');
    } else {
      alert('Username yoki parol xato!');
    }
  }
}
