import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AgGridModule } from "ag-grid-angular";
import { TDSetFilterComponent } from './td-set-filter.component';
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule.withComponents([TDSetFilterComponent])
  ],
  declarations: [AppComponent, TDSetFilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
