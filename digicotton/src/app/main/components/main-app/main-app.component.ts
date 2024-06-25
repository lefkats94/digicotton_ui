import { Component, OnInit  } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit  {

  constructor(
    public authService: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  navigateToPortfolio() {
    this.router.navigate(['/user-portfolio']);
  }

  navigateToGuide() {
    this.router.navigate(['/guide']);
  }

  navigateToMeteo() {
    this.router.navigate(['/meteo']);
  }

}
