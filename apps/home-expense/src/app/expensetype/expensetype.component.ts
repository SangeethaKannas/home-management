import { Component } from '@angular/core';
import { ExpenseType } from './expense-type';


@Component({
  selector: 'home-management-expensetype',
  templateUrl: './expensetype.component.html',
  styleUrls: ['./expensetype.component.css']
})
export class ExpensetypeComponent  {

  expenseTypeModel = new ExpenseType(0, "Food");
  submitted = false;
  expenseTypes : ExpenseType[] = [{id:1,name:"Food"},{id:2,name:"Clothing"},{id:3,name:"Shelter"},{id:1,name:"Communication"}];
  constructor() { }

  onSubmit() {
    this.expenseTypes.push(this.expenseTypeModel);
    this.expenseTypeModel = new ExpenseType(42,'','');
    this.submitted = true;
  }

  edit(expenseTypeClicked) {
    this.expenseTypeModel = expenseTypeClicked;
  }

}
