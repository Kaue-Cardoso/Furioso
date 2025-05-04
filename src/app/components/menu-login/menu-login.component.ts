import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'menu-login',
  imports: [],
  templateUrl: './menu-login.component.html',
  styleUrl: './menu-login.component.scss'
})
export class MenuLoginComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToRegister() {
    this.router.navigate(['/register'], { relativeTo: this.route });
  }
  goToHome() {
    this.router.navigate([''], { relativeTo: this.route });
  }
  
}
