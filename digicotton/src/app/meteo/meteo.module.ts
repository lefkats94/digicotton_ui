import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMeteoComponent } from './main-meteo/main-meteo.component';
import { AuthService } from '../authentication/shared/services/auth.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailsMeteoComponent } from './details-meteo/details-meteo.component';


@NgModule({
  declarations: [
    MainMeteoComponent,
    DetailsMeteoComponent
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
export class MeteoModule { }
