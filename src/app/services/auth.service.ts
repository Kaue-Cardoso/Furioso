import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly STORAGE_KEY = 'furia_users';
  private readonly CURRENT_USER_KEY = 'currentUser';


  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() { this.loadCurrentUser() }

  private loadCurrentUser() {
    const storedUser = localStorage.getItem(this.CURRENT_USER_KEY);
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  register(user: User): boolean {
    const users = this.getAllUsers();

    if (users.some(u => u.email === user.email)) {
      return false;
    }

    // // Se houver imagem, converte para Base64
    // if (user.profileImage && user.profileImage.startsWith('data:')) {
    //   // Já está em Base64 (pré-visualização)
    // } else if (user.profileImage) {
    //   // Implemente aqui o upload para um servidor se necessário
    // }

    users.push(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): User | null {
    const user = this.getAllUsers().find(u =>
      u.email === email && u.password === password
    );

    if (user) {
      this.currentUserSubject.next(user);
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
    }

    return user || null;
  }


  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    this.currentUserSubject.next(null);
  }

  private getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

}
