import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PolygonsService } from '../../services/polygons.service';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../../../../environments/api.config';

@Component({
  selector: 'app-user-polygons',
  templateUrl: './user-polygons.component.html',
  styleUrls: ['./user-polygons.component.css']
})
export class UserPolygonsComponent implements OnInit {
  uid: string;
  availableUserPolygons: any;
  selectedUserPolygonValue: string;
  @Output() selectedUserPolygon = new EventEmitter<string>();

  constructor(
    public authService: AuthService, 
    public httpClient: HttpClient) {}

    ngOnInit() {
      this.authService.afAuth.authState.subscribe((user) => {
        if (user) {
          this.uid = user.uid;
          this.get_user_files();
        }
      });
    }
  
    get_user_files() {
      this.httpClient.get<any>(`${API_ENDPOINT}/user_portfolio/show-kml/${this.uid}/`).subscribe(
        (response: { files: string[] }) => {
          this.availableUserPolygons = response;
        },
        (error) => {
          console.error('Request failed', error);
        }
      );
    }

    selectUserPolygon(polygon) {
      this.selectedUserPolygonValue = polygon.value;
      this.selectedUserPolygon.emit(polygon.value);
    }
}
