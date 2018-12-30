import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { ExpensetypeComponent } from './expensetype/expensetype.component';
import { ExpenseComponent } from './expense/expense.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensetypeComponent,
    ExpenseComponent,
    AddexpenseComponent
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
