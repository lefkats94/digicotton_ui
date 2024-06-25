import { Component, OnInit } from '@angular/core';
import { careColumns, careData, 
         practicesColumns1, practicesData1,
         practicesColumns2, practicesData2,
         practicesColumns3, practicesData3,
         practicesColumns4, practicesData4,
         practicesColumns5, practicesData5,
         harvestColumns1, harvestData1, harvestColumns2, harvestData2,
         harvestColumns3, harvestData3, harvestColumns4, harvestData4,
         careColumnsNo, careDataNo, 
         practicesColumnsNo1, practicesDataNo1,
         practicesColumnsNo2, practicesDataNo2,
         practicesColumnsNo3, practicesDataNo3,
         practicesColumnsNo4, practicesDataNo4,
         practicesColumnsNo5, practicesDataNo5,
         harvestColumnsNo1, harvestDataNo1, harvestColumnsNo2, harvestDataNo2,
         harvestColumnsNo3, harvestDataNo3, harvestColumnsNo4, harvestDataNo4} from '../../mock-guide';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.css']
})
export class GuideDetailsComponent implements OnInit{

  selectedMethod: string | null = null;
  selectedMandatory: string | null = null;

  displayedColumns: string[] = ['column1', 'column2', 'column3'];

  columnNames1: { [key: string]: string } = {};
  dataSource1: any[] = [];

  columnNames2: { [key: string]: string } = {};
  dataSource2: any[] = [];

  columnNames3: { [key: string]: string } = {};
  dataSource3: any[] = [];

  columnNames4: { [key: string]: string } = {};
  dataSource4: any[] = [];

  columnNames5: { [key: string]: string } = {};
  dataSource5: any[] = [];

  ngOnInit() {
    this.selectMethod('Καλλιεργητικές Πρακτικές');
    this.selectMandatory('Υποχρεωτική Εφαρμογή');
  }

  selectMethod(value: string) {
    this.selectedMethod = value;
    if (this.selectedMandatory === 'Υποχρεωτική Εφαρμογή'){
      if (this.selectedMethod === 'Καλλιεργητικές φροντίδες') {
        this.columnNames1 = careColumns;
        this.dataSource1 = careData;
        this.columnNames2 = {};
        this.dataSource2 = [];
        this.columnNames3 = {};
        this.dataSource3 = [];
        this.columnNames4 = {};
        this.dataSource4 = [];
        this.columnNames5 = {};
        this.dataSource5 = [];
      } else if (this.selectedMethod === 'Καλλιεργητικές Πρακτικές') {
        this.columnNames1 = practicesColumns1;
        this.dataSource1 = practicesData1;
        this.columnNames2 = practicesColumns2;
        this.dataSource2 = practicesData2;
        this.columnNames3 = practicesColumns3;
        this.dataSource3 = practicesData3;
        this.columnNames4 = practicesColumns4;
        this.dataSource4 = practicesData4;
        this.columnNames5 = practicesColumns5;
        this.dataSource5 = practicesData5;
      } else if (this.selectedMethod === 'Πρακτικές Συγκομιδής') {
        this.columnNames1 = harvestColumns1;
        this.dataSource1 = harvestData1;
        this.columnNames2 = harvestColumns2;
        this.dataSource2 = harvestData2;
        this.columnNames3 = harvestColumns3;
        this.dataSource3 = harvestData3;
        this.columnNames4 = harvestColumns4;
        this.dataSource4 = harvestData4;
        this.columnNames5 = {};
        this.dataSource5 = [];
      }
    }
    else if (this.selectedMandatory === 'Μη Υποχρεωτική Εφαρμογή'){
      if (this.selectedMethod === 'Καλλιεργητικές φροντίδες') {
        this.columnNames1 = careColumnsNo;
        this.dataSource1 = careDataNo;
        this.columnNames2 = {};
        this.dataSource2 = [];
        this.columnNames3 = {};
        this.dataSource3 = [];
        this.columnNames4 = {};
        this.dataSource4 = [];
        this.columnNames5 = {};
        this.dataSource5 = [];
      } else if (this.selectedMethod === 'Καλλιεργητικές Πρακτικές') {
        this.columnNames1 = practicesColumnsNo1;
        this.dataSource1 = practicesDataNo1;
        this.columnNames2 = practicesColumnsNo2;
        this.dataSource2 = practicesDataNo2;
        this.columnNames3 = practicesColumnsNo3;
        this.dataSource3 = practicesDataNo3;
        this.columnNames4 = practicesColumnsNo4;
        this.dataSource4 = practicesDataNo4;
        this.columnNames5 = practicesColumnsNo5;
        this.dataSource5 = practicesDataNo5;
      } else if (this.selectedMethod === 'Πρακτικές Συγκομιδής') {
        this.columnNames1 = harvestColumnsNo1;
        this.dataSource1 = harvestDataNo1;
        this.columnNames2 = harvestColumnsNo2;
        this.dataSource2 = harvestDataNo2;
        this.columnNames3 = harvestColumnsNo3;
        this.dataSource3 = harvestDataNo3;
        this.columnNames4 = harvestColumnsNo4;
        this.dataSource4 = harvestDataNo4;
        this.columnNames5 = {};
        this.dataSource5 = [];
      }
    }
  }

  selectMandatory(value: string) {
    this.selectedMandatory = value;
    if (this.selectedMandatory === 'Υποχρεωτική Εφαρμογή'){
      if (this.selectedMethod === 'Καλλιεργητικές φροντίδες') {
        this.columnNames1 = careColumns;
        this.dataSource1 = careData;
        this.columnNames2 = {};
        this.dataSource2 = [];
        this.columnNames3 = {};
        this.dataSource3 = [];
        this.columnNames4 = {};
        this.dataSource4 = [];
        this.columnNames5 = {};
        this.dataSource5 = [];
      } else if (this.selectedMethod === 'Καλλιεργητικές Πρακτικές') {
        this.columnNames1 = practicesColumns1;
        this.dataSource1 = practicesData1;
        this.columnNames2 = practicesColumns2;
        this.dataSource2 = practicesData2;
        this.columnNames3 = practicesColumns3;
        this.dataSource3 = practicesData3;
        this.columnNames4 = practicesColumns4;
        this.dataSource4 = practicesData4;
        this.columnNames5 = practicesColumns5;
        this.dataSource5 = practicesData5;
      } else if (this.selectedMethod === 'Πρακτικές Συγκομιδής') {
        this.columnNames1 = harvestColumns1;
        this.dataSource1 = harvestData1;
        this.columnNames2 = harvestColumns2;
        this.dataSource2 = harvestData2;
        this.columnNames3 = harvestColumns3;
        this.dataSource3 = harvestData3;
        this.columnNames4 = harvestColumns4;
        this.dataSource4 = harvestData4;
        this.columnNames5 = {};
        this.dataSource5 = [];
      }
    }
    else if (this.selectedMandatory === 'Μη Υποχρεωτική Εφαρμογή'){
      if (this.selectedMethod === 'Καλλιεργητικές φροντίδες') {
        this.columnNames1 = careColumnsNo;
        this.dataSource1 = careDataNo;
        this.columnNames2 = {};
        this.dataSource2 = [];
        this.columnNames3 = {};
        this.dataSource3 = [];
        this.columnNames4 = {};
        this.dataSource4 = [];
        this.columnNames5 = {};
        this.dataSource5 = [];
      } else if (this.selectedMethod === 'Καλλιεργητικές Πρακτικές') {
        this.columnNames1 = practicesColumnsNo1;
        this.dataSource1 = practicesDataNo1;
        this.columnNames2 = practicesColumnsNo2;
        this.dataSource2 = practicesDataNo2;
        this.columnNames3 = practicesColumnsNo3;
        this.dataSource3 = practicesDataNo3;
        this.columnNames4 = practicesColumnsNo4;
        this.dataSource4 = practicesDataNo4;
        this.columnNames5 = practicesColumnsNo5;
        this.dataSource5 = practicesDataNo5;
      } else if (this.selectedMethod === 'Πρακτικές Συγκομιδής') {
        this.columnNames1 = harvestColumnsNo1;
        this.dataSource1 = harvestDataNo1;
        this.columnNames2 = harvestColumnsNo2;
        this.dataSource2 = harvestDataNo2;
        this.columnNames3 = harvestColumnsNo3;
        this.dataSource3 = harvestDataNo3;
        this.columnNames4 = harvestColumnsNo4;
        this.dataSource4 = harvestDataNo4;
        this.columnNames5 = {};
        this.dataSource5 = [];
      }
    }
  }

  showTable1: boolean = false;
  showTable2: boolean = false;
  showTable3: boolean = false;
  showTable4: boolean = false;
  showTable5: boolean = false;

  isOpenTable1: boolean = false;
  isOpenTable2: boolean = false;
  isOpenTable3: boolean = false;
  isOpenTable4: boolean = false;
  isOpenTable5: boolean = false;

  toggleTable1() {
    this.showTable1 = !this.showTable1;
    this.isOpenTable1 = !this.isOpenTable1;
  }

  toggleTable2() {
    this.showTable2 = !this.showTable2;
    this.isOpenTable2 = !this.isOpenTable2;
  }

  toggleTable3() {
    this.showTable3 = !this.showTable3;
    this.isOpenTable3 = !this.isOpenTable3;
  }

  toggleTable4() {
    this.showTable4 = !this.showTable4;
    this.isOpenTable4 = !this.isOpenTable4;
  }

  toggleTable5() {
    this.showTable5 = !this.showTable5;
    this.isOpenTable5 = !this.isOpenTable5;
  }

  showInfo: boolean = true;
  isOpenInfo: boolean = true;
  toggleInfo() {
    this.showInfo = !this.showInfo;
    this.isOpenInfo = !this.isOpenInfo;
  }
}
