import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup
  submit: boolean = false
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).+$/)]]
    })

  }
  get loginControl() {
    return this.loginForm.controls
  }
  handleSubmit() {
    this.submit = true
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login successful', res);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.log('Login failed', err);
        }
      })
    }

  }

}
