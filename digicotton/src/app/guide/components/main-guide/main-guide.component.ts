import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-guide',
  templateUrl: './main-guide.component.html',
  styleUrls: ['./main-guide.component.css']
})
export class MainGuideComponent {
  constructor(
    public authService: AuthService,
    private router: Router
    ) {}

    navigateToDashboard() {
      this.router.navigate(['/dashboard']);
    }
}
