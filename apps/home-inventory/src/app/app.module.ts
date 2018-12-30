import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryFormComponent,
    InventoryDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
