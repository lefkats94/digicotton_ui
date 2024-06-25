import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainModule } from './main/main.module';
import { UserPortfolioModule } from './user-portfolio/user-portfolio.module';
import { GuideModule } from './guide/guide.module';
import { MeteoModule } from './meteo/meteo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainModule,
    UserPortfolioModule,
    GuideModule,
    MeteoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
