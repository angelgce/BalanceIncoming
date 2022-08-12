export class item {

  name: string = "";
  amount: number = 0;
  months: number = 0;
  perMont: number = 0;
  income = 0;
  incomePerMonth = 0;

  constructor(name: string, amount: number, months: number, incomePerMonth: number) {
    this.name = name;
    this.amount = amount;
    this.months = months;
    this.perMont = amount / months;
    this.incomePerMonth = incomePerMonth;
  }

  public isCover(): boolean {
    return this.income == this.incomePerMonth;
  }


  public pay(): number {
    this.income += 1;
    return this.perMont / this.incomePerMonth;
  }

}
