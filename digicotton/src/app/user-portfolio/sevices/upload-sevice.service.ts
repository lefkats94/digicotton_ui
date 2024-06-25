import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadSeviceService {

  private uploadedFile = new BehaviorSubject<boolean>(false);
  uploadedFile$ = this.uploadedFile.asObservable();

  setUploadedFile(uploaded: boolean) {
    this.uploadedFile.next(uploaded);
  }
}
