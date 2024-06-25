import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'digicotton';

  showPreloader: boolean = true;

  ngOnInit(): void {
    // Simulate a delay (e.g., 3 seconds) for the preloader
    setTimeout(() => {
      this.showPreloader = false;
    }, 3000); // Adjust the duration as needed (in milliseconds)
  }

  ngAfterViewInit(): void {
    // Add any additional logic to trigger the preloader, if necessary
  }
}