import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGuideComponent } from './components/main-guide/main-guide.component';
import { GuideDetailsComponent } from './components/guide-details/guide-details.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MainGuideComponent,
    GuideDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatStepperModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class GuideModule { }
