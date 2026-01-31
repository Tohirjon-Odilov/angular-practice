import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../custom-validator/password-match-validator';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-student-register',
  imports: [ReactiveFormsModule],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentRegister implements OnInit {
  private fb = inject(FormBuilder);
  studentForm!: FormGroup;

  ngOnInit() {
    this.studentForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        secondName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required], { disabled: true }],
      },
      {
        validators: passwordMatchValidator,
      },
    );
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      alert('Xabar yuborildi!');
      this.studentForm.reset();
    }
  }

  get name() {
    return this.studentForm.get('name');
  }

  get secondName() {
    return this.studentForm.get('secondName');
  }

  get email() {
    return this.studentForm.get('email');
  }

  get password() {
    return this.studentForm.get('password');
  }

  get confirmPassword() {
    return this.studentForm.get('confirmPassword');
  }
}
