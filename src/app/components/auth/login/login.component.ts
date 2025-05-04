import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup; // Declare sem inicializar

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

    errorMessage = '';

    onSubmit() {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        const user = this.authService.login(email!, password!);
        
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['']);
        } else {
          this.errorMessage = 'Email ou senha inválidos';
        }
      }
    }

    register(){
      this.router.navigate(["register"]);
    }

}
