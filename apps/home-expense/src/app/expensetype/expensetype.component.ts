import { Component } from '@angular/core';
import {
  animate,
  trigger,
  style,
  transition,
  keyframes
} from '@angular/animations';
import { ExpenseType } from './expense-type';

@Component({
  selector: 'home-management-expensetype',
  templateUrl: './expensetype.component.html',
  styleUrls: ['./expensetype.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(300px)' }),
            style({ transform: 'translateX(0)' })
          ])
        )
      ]),
      transition('*=>void', [
        style({ transform: 'translateX(0px)' }),
        animate(
          100,
          keyframes([
            style({ transform: 'translateX(0px)' }),
            style({ transform: 'translateX(300px)' })
          ])
        )
      ])
    ])
  ]
})
export class ExpensetypeComponent {
  expenseTypeModel = new ExpenseType(0, 'Food');
  submitted = false;
  expenseTypes: ExpenseType[] = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Shelter' },
    { id: 1, name: 'Communication' }
  ];
  constructor() {}

  onSubmit() {
    this.expenseTypeModel.id = 50;
    this.expenseTypes.push(this.expenseTypeModel);
    this.expenseTypeModel = new ExpenseType(42, '', '');
    this.submitted = true;
  }

  edit(expenseTypeClicked) {
    this.expenseTypeModel = expenseTypeClicked;
    this.submitted = false;
  }

  /*delete item*/
  deleteExpenseType(expenseTypeClicked) {
    for (let i = 0; i <= this.expenseTypes.length; i++) {
      if (expenseTypeClicked == this.expenseTypes[i]) {
        this.expenseTypes.splice(i, 1);
      }
    }
  }
}
