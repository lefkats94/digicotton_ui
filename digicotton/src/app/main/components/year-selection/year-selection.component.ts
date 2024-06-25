import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PolygonsService } from '../../services/polygons.service';

@Component({
  selector: 'app-year-selection',
  templateUrl: './year-selection.component.html',
  styleUrls: ['./year-selection.component.css']
})
export class YearSelectionComponent implements OnInit {

  availableYears: string[] = [];
  selectedYearValue;
  @Output() selectedYear = new EventEmitter<any>();

  constructor(private polygonsService: PolygonsService) { }

  ngOnInit() {
    this.polygonsService.getYears().subscribe(response => {
      this.availableYears = response.years;
      this.selectedYearValue = this.availableYears[0];
      })}

  selectYear(year) {
    this.selectedYearValue = year.value;
    this.selectedYear.emit(year.value);
  }
}
