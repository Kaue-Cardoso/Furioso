import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ComunidadeComponent } from './components/comunidade/comunidade.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {
        path: "", // Rota padrão (localhost:4200/)
        component: HomeComponent
    },
    
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'store',
      component: StoreComponent
    },
    {
      path: 'comunity',
      component: ComunidadeComponent
    },
    { path: 'profile', component: ProfileComponent },

];
