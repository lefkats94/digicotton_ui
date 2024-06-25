import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserSelectionService } from '../../services/user-selection.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tool-selection',
  templateUrl: './tool-selection.component.html',
  styleUrls: ['./tool-selection.component.css']
})
export class ToolSelectionComponent implements OnDestroy {
  @Output() selectedTool = new EventEmitter<[string, boolean]>();
  checkedOption: string = '';
  selectedYear: number;
  selectedYearSub: Subscription;

  constructor(private userSelection: UserSelectionService) {
    this.selectedYearSub = this.userSelection.selectedYear$.subscribe((year) => {
      this.selectedYear = year;
      // Deselect any buttons when the year changed
      this.deselectButtons();
    });
  }

  onSelectTool(tool: string, need: boolean) {
    if (this.checkedOption === tool) {
      this.checkedOption = '';
      this.selectedTool.emit(['', false]);
    } else {
      this.checkedOption = tool;
      this.selectedTool.emit([tool, need]);
    }
  }

  deselectButtons() {
    // This function deselects any buttons
    this.checkedOption = '';
    this.selectedTool.emit(['', false]);
  }

  ngOnDestroy() {
    // Unsubscribe from the selectedYear observable to prevent memory leaks
    this.selectedYearSub.unsubscribe();
  }
}
