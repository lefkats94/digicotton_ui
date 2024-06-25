import { Component, OnInit } from '@angular/core';
import { UserSelectionService } from '../../services/user-selection.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { API_ENDPOINT } from '../../../../environments/api.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  uid: any;
  allowDateSelection: boolean = false;
  selectedTool: any;
  selectedYear: any;
  selectedDate =  '';
  selectedDateApi = '';
  selectedPolygon = '';
  selectedPolygonName = '';
  submitted: boolean;

  constructor(private userSelection: UserSelectionService,
              private httpClient: HttpClient,
              public authService: AuthService,
  ){}

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
      }
    });

    this.userSelection.setSelectedYear(2023);
    this.userSelection.setSelectedTool('', false);
    this.userSelection.setSelectedDate('','');
    this.userSelection.setSelectedUserPolygon('');
    this.submitted = false;
  }


  onYearSelected(year: number) {
    this.userSelection.setSelectedYear(year);
    this.selectedYear = year;
    this.submitted = false;
  }

  onDateSelected(date: [string, string]) {
    this.userSelection.setSelectedDate(date[0], date[1]);
    this.selectedDate = date[0];
    this.selectedDateApi = date[1];
    this.submitted = false;
  }

  onToolSelected(selectedTool: [string, boolean]) {
    this.userSelection.setSelectedTool(selectedTool[0], selectedTool[1]);
    this.allowDateSelection = selectedTool[1];
    this.selectedTool = selectedTool;
    this.submitted = false;
    //reset the selected date to '' when other tool is selected or the tool is deselected
    if (selectedTool[1] === false || this.selectedTool[0] === ''){
      this.selectedDate = ''
    }
  }

  onUserPolygonSelected(selectedPolygon: string) {
    this.userSelection.setSelectedUserPolygon(selectedPolygon);
    this.selectedPolygon = selectedPolygon;
    this.selectedPolygonName = selectedPolygon.split(".")[0];
    this.submitted = false;
  }

  isFormValid(): boolean {
    if (this.selectedTool[0] !== '' && this.selectedTool[1] === false && this.selectedPolygon !== ''){
      return true
    }
    else if (this.selectedTool[0] !== '' && this.selectedTool[1] === true && this.selectedDate !== '' && this.selectedPolygon !== '') {
      return true
    }
    else {
      return false
    }
  }

  onSubmit() {
    this.userSelection.triggerMethod();
    this.submitted = true;
  }

  onDownloadTif() {
    // Make an HTTP GET request to download the file
    const url = `${API_ENDPOINT}/download_tif/${this.uid}/${this.selectedTool[0]}/${this.selectedYear}/${this.selectedDateApi}/${this.selectedPolygonName}/`;
    console.log(url)
    this.httpClient.get(url, { responseType: 'blob' }).subscribe((response: Blob) => {
      // Create a Blob object from the response
      const file = new Blob([response], { type: 'application/octet-stream' });

      // Create a URL for the Blob object
      const fileURL = URL.createObjectURL(file);

      // Create a link element
      const a = document.createElement('a');
      a.href = fileURL;
      
      // Set the file name (you may want to adjust the file name logic here)
      a.download = `${this.selectedTool[0].toUpperCase()}_${this.selectedPolygonName}_${this.selectedDateApi}.tif`;

      // Append the link to the body and trigger the download
      document.body.appendChild(a);
      a.click();

      // Clean up
      URL.revokeObjectURL(fileURL);
    });
  }

  onDownloadPng(){
    
  }

}
