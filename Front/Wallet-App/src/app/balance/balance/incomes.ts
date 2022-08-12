export class Incomes {

  id: number = 0;
  amount: number = 0;
  name: String = "";
  date: String = "";
  avaliable: number = 0;
  payed: number = 0;
  debtList: Debt[] = [];


  constructor(id: number, name: String, amount: number, date: String) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.avaliable = amount;
  }

  public restMoney(rest: number): void {
    this.avaliable -= rest;
    this.payed += rest;
  }
}

export class Debt {
  name: string = "";
  perMonth: number = 0;

  constructor(name: string, perMonth: number) {
    this.name = name;
    this.perMonth = perMonth;
  }


}
