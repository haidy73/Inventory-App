import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup
  Submit: boolean = false
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]],
      username: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
      password: ['', [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).+$/)]], confirmationPassword: ['', [Validators.required]],
    })

  }
  get registerControl() {
    return this.registerForm.controls
  }
  handleSubmit() {
    this.Submit = true
    const password = this.registerForm.get('password')?.value;
    const confirmationPassword =
      this.registerForm.get('confirmationPassword')?.value;

    if (password !== confirmationPassword) {
      this.registerForm
        .get('confirmationPassword')
        ?.setErrors({ passwordMismatch: true });

      return;
    }
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('Register successful', res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log('Register failed', err);
        }
      })
    }

  }
}
