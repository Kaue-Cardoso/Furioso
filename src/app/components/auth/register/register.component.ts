import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup; // Declare sem inicializar
  selectedImage: string | null = null;
  profileImageFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      cep: [''],
      street: [''],
      city: [''],
      tel: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator

    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.profileImageFile = file;
      
      // Pré-visualização
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  

  private passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      control.get('confirmPassword')?.setErrors(null);
      return null;
    }
  }

  errorMessage = '';


  onSubmit() {
    if (this.registerForm.valid && !this.registerForm.hasError('passwordMismatch')) {
      const user: User = {
        id: Date.now().toString(),
        ...this.registerForm.value,
        profileImage: this.selectedImage || undefined
      } as User;

      // Remove o confirmPassword antes de enviar
      

      if (this.authService.register(user)) {
        alert('Cadastro realizado!');
        this.registerForm.reset();
        this.selectedImage = null;
        this.router.navigate(['/login']);
      }
    } else {
      this.errorMessage = 'Por favor, corrija os erros no formulário';
    }
  }
}
