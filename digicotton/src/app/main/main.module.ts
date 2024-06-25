import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../authentication/shared/services/auth.service';
import { YearSelectionComponent } from './components/year-selection/year-selection.component';
import { ToolSelectionComponent } from './components/tool-selection/tool-selection.component';
import { DateSelectionComponent } from './components/date-selection/date-selection.component';
import { LegendsComponent } from './components/legends/legends.component';
import { UserPolygonsComponent } from './components/user-polygons/user-polygons.component';
import { WarningsComponent } from './components/warnings/warnings.component';

@NgModule({
  declarations: [
    MapComponent,
    MainAppComponent,
    MenuComponent,
    YearSelectionComponent,
    ToolSelectionComponent,
    DateSelectionComponent,
    LegendsComponent,
    UserPolygonsComponent,
    WarningsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class MainModule { }
