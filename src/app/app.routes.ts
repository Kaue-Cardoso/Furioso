import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "", // Rota padrão (localhost:4200/)
        component: HomeComponent
    },
    {
        path: "login", // Rota para login (localhost:4200/login)
        component: LoginComponent
    }
];
