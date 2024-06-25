import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UploadSeviceService } from '../../sevices/upload-sevice.service';
import { API_ENDPOINT } from '../../../../environments/api.config';

@Component({
  selector: 'app-upload-kml',
  templateUrl: './upload-kml.component.html',
  styleUrls: ['./upload-kml.component.css']
})
export class UploadKmlComponent implements OnInit {
  uid: string;
  selectedFile: File | null = null;
  @Output() uploadedFile = new EventEmitter<boolean>(false);

  constructor(public authService: AuthService,
              private httpClient: HttpClient,
              private uploadService: UploadSeviceService) {}

  ngOnInit() {
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    
    // Check if a file was selected
    if (file) {
      // Check if the selected file has a KML extension
      const fileNameParts = file.name.split('.');
      const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

      if (fileExtension === 'kml') {
        this.selectedFile = file;
        
        // Call onSubmit() when file is selected
        this.onSubmit();
      } else {
        // Reset selectedFile if the file is not a KML file
        this.selectedFile = null;
        alert('Please select a KML file.');
      }
    } else {
      this.selectedFile = null;
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    
    formData.append('file', this.selectedFile);
    console.log(this.uid)
    this.httpClient.post(`${API_ENDPOINT}/user_portfolio/upload-kml/${this.uid}/`,  formData).subscribe(
      (response) => {
        console.log('File uploaded successfully', response);
        // Handle the response from your API here
        this.uploadService.setUploadedFile(true);
      },
      (error) => {
        console.error('File upload failed', error);
        // Handle the error here
      }
    );
  }
}
