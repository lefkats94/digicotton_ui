import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import { Router } from '@angular/router';
import { API_ENDPOINT } from '../../../../environments/api.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent {
  email: string;
  allMails;
  isRegistered: boolean;

  constructor(
    public authService: AuthService,
    private router: Router,
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.email = user.email;
      }
      this.http.get<any>(`${API_ENDPOINT}/warnings_mails`).subscribe(
        (mails) => {
          this.allMails = mails['warning_mails'];
          if (this.allMails && this.email && this.allMails.includes(this.email)) {
            this.isRegistered = true;
          } else {
            this.isRegistered = false;
          }
        }
      )
    });
  }

  addAccount(){
    this.http.get<any>(`${API_ENDPOINT}/add_account/${this.email}`).subscribe(
      response => {
        console.log('Response from server:', response);
      },
      error => {
        console.error('Error occurred:', error);
      }
    );

    this.isRegistered = true;
  }


  removeAccount(){
    this.http.get<any>(`${API_ENDPOINT}/remove_account/${this.email}`).subscribe(
      response => {
        console.log('Response from server:', response);
      },
      error => {
        console.error('Error occurred:', error);
      }
    );

    this.isRegistered = false;
  }

}
