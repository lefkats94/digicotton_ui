import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/components/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/components/verify-email/verify-email.component';
import { MainAppComponent } from './main/components/main-app/main-app.component';
import { MainPortfolioComponent } from './user-portfolio/components/main-portfolio/main-portfolio.component';
import { MainGuideComponent } from './guide/components/main-guide/main-guide.component';
import { MainMeteoComponent } from './meteo/main-meteo/main-meteo.component';

// route guard
import { AuthGuard } from './authentication/shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: MainAppComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'user-portfolio', component: MainPortfolioComponent, canActivate: [AuthGuard] },
  { path: 'guide', component: MainGuideComponent, canActivate: [AuthGuard] },
  { path: 'meteo', component: MainMeteoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}