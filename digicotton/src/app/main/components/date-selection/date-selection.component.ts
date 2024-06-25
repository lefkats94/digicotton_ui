import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { VisualizationsService } from '../../services/visualizations.service';
import { UserSelectionService } from '../../services/user-selection.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-selection',
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.css']
})
export class DateSelectionComponent implements OnDestroy {

  availableDatesGreek: string[] = [];
  availableDatesEnglish: string[] = [];
  selectedDateDisplayed = '';
  selectedDateApi = '';
  @Output() selectedDate = new EventEmitter<[string, string]>();

  selectedYear: number;
  selectedTool: any;
  
  selectedYearSub: Subscription;
  selectedToolSub: Subscription;

  constructor(private visualizationService: VisualizationsService,
    private userSelection: UserSelectionService
    ) { 
      this.selectedYearSub = this.userSelection.selectedYear$.subscribe((year) => {
        this.selectedYear = year;
      });

      this.selectedToolSub = this.userSelection.selectedTool$.subscribe((tool) => {
        this.selectedTool = tool;
        if (this.selectedTool[1]){
          this.fetchAvailableDates();
        }
    })
  }

  fetchAvailableDates() {
    this.visualizationService.getAvailabledates(this.selectedTool[0], this.selectedYear).subscribe(response => {
      this.availableDatesEnglish = response.available_dates;
      this.availableDatesGreek = this.availableDatesEnglish.map(date => this.translateToGreek(date));
    });
  }

  selectDate(date) {
    this.selectedDateDisplayed = date.value;
    this.selectedDateApi = this.formatSelectedDateApi(this.selectedYear, this.translateToEnglish(date.value));
    this.selectedDate.emit([this.selectedDateDisplayed, this.selectedDateApi]);
  }

  formatSelectedDateApi(year: number, dateDisplayed: string): string {
    // Split the displayed date into parts
    const dateParts = dateDisplayed.split(' ');
    if (dateParts.length >= 2) {
      const day = dateParts[0];
      const month = dateParts[1];
      // Convert month name to a numeric representation (e.g., "January" to 01)
      const monthNumber = ('0' + (new Date(Date.parse(month + ' 1, 2000')).getMonth() + 1)).slice(-2);
      // Format as "YYYY_MM_DD"
      return `${year}_${monthNumber}_${day}`;
    }
    return '';
  }

  translateToGreek(date: string): string {
    const monthMap = {
      'January': 'Ιανουαρίου',
      'February': 'Φεβρουαρίου',
      'March': 'Μαρτίου',
      'April': 'Απριλίου',
      'May': 'Μαΐου',
      'June': 'Ιουνίου',
      'July': 'Ιουλίου',
      'August': 'Αυγούστου',
      'September': 'Σεπτεμβρίου',
      'October': 'Οκτωβρίου',
      'November': 'Νοεμβρίου',
      'December': 'Δεκεμβρίου'
    };
    const [day, month] = date.split(' ');
    return `${day} ${monthMap[month]}`;
  }

  translateToEnglish(date: string): string {
    const monthMap = {
      'Ιανουαρίου': 'January',
      'Φεβρουαρίου': 'February',
      'Μαρτίου': 'March',
      'Απριλίου': 'April',
      'Μαΐου': 'May',
      'Ιουνίου': 'June',
      'Ιουλίου': 'July',
      'Αυγούστου': 'August',
      'Σεπτεμβρίου': 'September',
      'Οκτωβρίου': 'October',
      'Νοεμβρίου': 'November',
      'Δεκεμβρίου': 'December'
    };
    const [day, month] = date.split(' ');
    return `${day} ${monthMap[month]}`;
}

  ngOnDestroy() {
    // Unsubscribe from subscriptions to prevent memory leaks
    this.selectedYearSub.unsubscribe();
    this.selectedToolSub.unsubscribe();
  }
}
