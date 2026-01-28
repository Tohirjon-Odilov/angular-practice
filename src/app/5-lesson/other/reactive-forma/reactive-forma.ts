import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forma',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forma.html',
  styleUrl: './reactive-forma.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveForma {
  contactForm!: FormGroup;

  ngOnInit() {
    // Forma yaratish
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Xabar yuborildi!');
      this.contactForm.reset();
    }
  }

  // Qulaylik uchun getter'lar
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
