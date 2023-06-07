import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import { TDSetFilterComponent } from './td-set-filter.component';

@Component({
  selector: 'my-app',
  template: `
    <div style="height: 100%; padding-top: 38px; box-sizing: border-box;">
      <ag-grid-angular
        #agGrid
        style="width: 100%; height: 100%;"
        id="myGrid"
        [rowData]="rowData"
        class="ag-theme-balham"
        [rowData]="rowData"
        [columnDefs]="columnDefs"
        [deltaRowDataMode]="true"
        [enableFilter]="true"
        (gridReady)="onGridReady($event)"
        [frameworkComponents]="frameworkComponents"
      ></ag-grid-angular>
    </div>
    <div style="position: absolute; top: 0; left: 0;">
      <button (click)="onAddRow()">Add Random Rows</button>
      <button (click)="onDeleteRow()">Delete One Random Row</button>
    </div>
  `,
})
export class AppComponent {
  private gridApi;
  private filter4;

  rowData: any[];
  frameworkComponents;
  columnDefs;

  constructor() {
    this.rowData = [
      {
        col4: 'A',
      },
      {
        col4: 'Z',
      },
      {
        col4: 'B',
      },
      {
        col4: 'F',
      },
      {
        col4: 'D',
      },
      {
        col4: 'E',
      },
    ];

    this.columnDefs = [
      {
        headerName: 'col4',
        field: 'col4',
        filter: 'tdSetFilter',
        width: 430,
      },
    ];
    this.frameworkComponents = { tdSetFilter: TDSetFilterComponent };
  }

  onAddRow() {
    const rowsToAdd = Array.from({ length: 100 }, () => {
      return {
        col4: String.fromCharCode(Math.floor(Math.random() * 25) + 65),
      };
    });

    this.gridApi.updateRowData({ add: rowsToAdd });
    this.filter4.onNewRowsLoaded();
  }

  onDeleteRow() {
    const rowsToRemove = Array.from({ length: 1 }, () => {
      return {
        col4: String.fromCharCode(Math.floor(Math.random() * 25) + 65),
      };
    });

    this.gridApi.updateRowData({ remove: rowsToRemove });
    this.filter4.onNewRowsLoaded();
  }

  onGridReady(params) {
    this.gridApi = params.api;

    // this.filter4 = params.api
    //   .getFilterInstance("col4")
    //   .getFrameworkComponentInstance();

    // this.filter4.setModel("C");
    // this.filter4.onFilterChanged();
  }
}
