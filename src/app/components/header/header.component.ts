import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
  }

  ngOnInit() {
    this.checkViewport();
    this.checkViewport();
    this.authService.currentUser$.subscribe(user => {
    console.log('User state changed:', user);
  });
  }

  checkViewport() {
    this.isMobileView = window.innerWidth < 1024;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }

  handleLogoClick() {
    if (this.isMobileView) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }


  constructor(private router: Router, private route: ActivatedRoute, public authService: AuthService) {}

  goToComunity(){
    this.router.navigate(['/comunity'], { relativeTo: this.route });
  }
  goToStore() {
    this.router.navigate(['/store'], { relativeTo: this.route });
  }
  
  goToLogin() {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

  goToHome(){
    this.router.navigate([''], { relativeTo: this.route });
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  handleAuthAction(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    } else {
      this.router.navigate(['/login']); // Ajuste a rota conforme necessário
    }
  }
}
