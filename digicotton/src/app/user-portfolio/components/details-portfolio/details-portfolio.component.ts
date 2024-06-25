import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { UploadSeviceService } from '../../sevices/upload-sevice.service';
import { API_ENDPOINT } from '../../../../environments/api.config';

@Component({
  selector: 'app-details-portfolio',
  templateUrl: './details-portfolio.component.html',
  styleUrls: ['./details-portfolio.component.css']
})
export class DetailsPortfolioComponent implements OnInit {
  uid: string;
  userPolygons: any;
  displayedColumns: string[] = ['index', 'fileName', 'delete'];
  dataSource: MatTableDataSource<any>;

  constructor(
    public authService: AuthService, 
    public httpClient: HttpClient,
    private uploadService: UploadSeviceService) {}

    ngOnInit() {
      this.authService.afAuth.authState.subscribe((user) => {
        if (user) {
          this.uid = user.uid;
          this.get_user_files();
        }
      });
  
      // Subscribe to uploadedFile updates from the service
      this.uploadService.uploadedFile$.subscribe((uploaded) => {
        if (uploaded) {
          console.log('File uploaded. Refreshing data...');
          this.get_user_files(); // Refresh data after a file upload
        }
      });
    }

    get_user_files() {
      this.httpClient.get(`${API_ENDPOINT}/user_portfolio/show-kml/${this.uid}`).subscribe(
        (response: any) => {
          console.log('Request successful', response);
          this.userPolygons = response; 
          this.dataSource = new MatTableDataSource(this.userPolygons.map((fileName, index) => ({ index: index + 1, fileName: fileName })));
        },
        (error) => {
          console.error('Request failed', error);
        }
      );
    }

  onButtonClick(fileName: string) {
    this.httpClient.delete(`${API_ENDPOINT}/user_portfolio/delete-kml/${this.uid}/${fileName}`).subscribe(
      () => {
        console.log('Delete request successful');
        this.get_user_files();
      },
      (error) => {
        console.error('Delete request failed', error);
      }
    );
  }
}
