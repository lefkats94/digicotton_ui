import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main-portfolio.component.html',
  styleUrls: ['./main-portfolio.component.css']
})
export class MainPortfolioComponent {
  constructor(
    public authService: AuthService,
    private router: Router
    ) {}

    navigateToDashboard() {
      this.router.navigate(['/dashboard']);
    }
}
