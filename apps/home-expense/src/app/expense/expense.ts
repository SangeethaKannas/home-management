import { ExpenseType } from "../expensetype/expense-type";

export class Expense {
    constructor(
        public  id:number,
        public name:string,
        public type:ExpenseType
    ){}
}
