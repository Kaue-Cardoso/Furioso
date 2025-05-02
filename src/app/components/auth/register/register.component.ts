import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  errorMessage = '';


  onSubmit() {
    if (this.registerForm.valid) {
      const user: User = {
        id: Date.now().toString(),
        ...this.registerForm.value,
        profileImage: this.selectedImage || undefined
      } as User;

      if (this.authService.register(user)) {
        alert('Cadastro realizado!');
        this.registerForm.reset();
        this.selectedImage = null;
      }
    }
  }
}
