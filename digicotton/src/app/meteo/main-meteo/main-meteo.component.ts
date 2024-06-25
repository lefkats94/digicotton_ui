import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-meteo',
  templateUrl: './main-meteo.component.html',
  styleUrls: ['./main-meteo.component.css']
})
export class MainMeteoComponent {
  constructor(
    public authService: AuthService,
    private router: Router
    ) {}

    navigateToDashboard() {
      this.router.navigate(['/dashboard']);
    }
}
