import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {IStudent, Student, StudentService} from '../../../../3-lesson/crm-system/services/student-service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router)
  private userService = inject(StudentService)

  protected username!: string;
  protected password!: string;

  protected login() {
    if(!this.username || !this.password) {
      return;
    }

    const user: Student = {
      id: Date.now(),
      email: this.username.toLowerCase() + "@gmail.com",
      grade: "C",
      subject: "null",
      name: this.username,
      point: 0
    }

    this.userService.add(user)
    localStorage.setItem('token', Date.now().toString());
    this.router.navigate(['/simple-users-app']);
  }
}
