import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSelectionService } from '../../services/user-selection.service';
import { API_ENDPOINT } from '../../../../environments/api.config';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnDestroy {
  selectedTool: [string, boolean];
  legendUrl: string
  ToolSub: Subscription;

  constructor(private userSelection: UserSelectionService) {
    this.ToolSub = this.userSelection.selectedTool$.subscribe((tool) => {
      this.selectedTool = tool;
      this.updateLegendUrl();
    });
  }

  updateLegendUrl() {
    // Append timestamp to the URL to avoid caching
    const timestamp = new Date().getTime();
    this.legendUrl = `${API_ENDPOINT}/legends/${this.selectedTool[0]}?timestamp=${timestamp}`;
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to avoid memory leaks
    if (this.ToolSub) {
      this.ToolSub.unsubscribe();
    }
  }
}
