import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSelectionService {

  private selectedYear = new BehaviorSubject<number>(2023);
  selectedYear$ = this.selectedYear.asObservable();
  setSelectedYear(year: number) {
    this.selectedYear.next(year);
  }

  private selectedDate = new BehaviorSubject<[string, string]>(['','']);
  selectedDate$ = this.selectedDate.asObservable();
  setSelectedDate(dateDisplayed: string, dateApi: string) {
    this.selectedDate.next([dateDisplayed, dateApi]);
  }

  private selectedTool = new BehaviorSubject<[string, boolean]>(['', false]);
  selectedTool$ = this.selectedTool.asObservable();
  setSelectedTool(tool: string, need: boolean) {
    this.selectedTool.next([tool, need]);
  }

  private selectedUserPolygon = new BehaviorSubject<string>('');
  selectedUserPolygon$ = this.selectedUserPolygon.asObservable();
  setSelectedUserPolygon(polygon: string) {
    this.selectedUserPolygon.next(polygon);
  }


  private triggerMethodSubject = new Subject<void>();
  triggerMethodObservable$ = this.triggerMethodSubject.asObservable();
  triggerMethod() {
    this.triggerMethodSubject.next();
  }

}
