import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPortfolioComponent } from './components/main-portfolio/main-portfolio.component';
import { DetailsPortfolioComponent } from './components/details-portfolio/details-portfolio.component';
import { AuthService } from '../authentication/shared/services/auth.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UploadKmlComponent } from './components/upload-kml/upload-kml.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    MainPortfolioComponent,
    DetailsPortfolioComponent,
    UploadKmlComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService
  ]
})
export class UserPortfolioModule { }
