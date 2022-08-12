import { Component, ElementRef, ViewChild } from '@angular/core';
import { Debt, Incomes } from './incomes';
import { item } from './item';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']

})
export class BalanceComponent {

  // ---> | Incomes | <----
  income1 = new Incomes(1, "TCS ", 14504.33, "15/agosto/2022");
  income2 = new Incomes(2, "Catorcena ", 4600, "17/agosto/2022");
  income3 = new Incomes(3, "Tanda ", 9000, "17/agosto/2022");
  income4 = new Incomes(4, "TCS ", 15716.83, "30/agosto/2022");
  income5 = new Incomes(5, "Catorcena ", 4600, "31/agosto/2022");
  // ---> | List of Incomes | <----
  listIncome: Incomes[] = [this.income1, this.income2, this.income3, this.income4, this.income5];
  // ---> | Size of Incomes | <----
  incomeChecks: number = this.listIncome.length;
  // ---> | Total incomes  | <----
  salaray: number = this.listIncome.reduce((partialSum, a) => partialSum + a.amount, 0);


  // ---> | Debts | <----
  debt1 = new item("Mercado Libre", 15000, 3, 1);
  debt4 = new item("Mueble TV", 3000, 12, 1);
  debt5 = new item("Renta", 17000, 1, 2);
  debt7 = new item("HSBC", 3500, 1, 1);
  debt8 = new item("Internet", 1300, 1, 2);
  debt9 = new item("Tanda Mama", 1200, 1, 2);
  debt10 = new item("Tanda Karla", 1000, 1, 1);
  debt11 = new item("PAPA", 3000, 1, 1);
  debt6 = new item("Diezmo", 4000, 1, 2);
  // ---> | List of Debts | <----
  list: item[] = [this.debt1, this.debt4, this.debt5, this.debt6, this.debt7, this.debt8, this.debt9, this.debt10, this.debt11];
  // ---> | Shorting List of Debts | <----
  sortedlist: item[] = this.list.sort((n1, n2) => n2.amount - n1.amount);


  // ---> | Getting Total of Debt | <----
  public getSumAmount(): number {
    let num: number = 0;
    this.list.forEach(function (value) {
      num += value.amount;
    });
    return num;
  }
  // ---> | Getting Total of Debt per month | <----
  public getSumPerMonth(): number {
    let num: number = 0;
    this.list.forEach(function (value) {
      num += value.perMont;
    });
    return num;
  }
  // ---> | Getting My Avaliable money per debts | <----
  public getFreeMonthly(): number {
    let num: number = 0;
    this.listIncome.forEach(function (value) {
      num += value.avaliable;
    });
    return num;
  }
  // ---> | Getting My debts to pay | <----
  public getToPayMonthly(): number {
    let num: number = 0;
    this.listIncome.forEach(function (value) {
      num += value.payed;
    });
    return this.getSumPerMonth() - num;
  }


  // ---> | Handeling or Debts | <----



  public addDebt(): void {
    console.log("asking....")
    let addDebt: any;
    const debt = document.getElementById('debtSelect') as HTMLInputElement | null;
    const bill = document.getElementById('billSelect') as HTMLInputElement | null;
    //If we have an debt and a bill
    if (debt != null && bill != null) {
      //find the debt we are
      this.sortedlist.forEach(function (obj) {
        if (obj.name === debt.value) { // we match the debt
          addDebt = new Debt(obj.name, obj.pay()); //we create a debt
        }
      })
      // we add the debt to the bill
      this.listIncome.forEach(function (obj2) {
        if (obj2.id == Number(bill.value)) {
          obj2.debtList.push(addDebt);
          obj2.restMoney(addDebt.perMonth);
        }
      });
      console.log("The final is :: " + addDebt.name);
    }

  }

  constructor() { }



}
