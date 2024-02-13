// Run: deno run src/02-methods.ts
enum Unit {
  YEARS = 'years',
  MONTHS = 'months',
  DAYS = 'days',
}

export class CustomDate {
  constructor(
    private year: number = 1993,
    private month: number = 7,
    private day: number = 9,
    public timezone: string = 'UTC'
  ) {}

  printFormat(): string {
    return `${this.year}-${this.addPadding(this.month)}-${this.addPadding(this.day)}`;
  }

  private addPadding(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  add(amount: number, unit: Unit): void {
    if (unit === Unit.YEARS) {
      this.year += amount;
    } else if (unit === Unit.MONTHS) {
      this.month += amount;
      if (this.month > 12) {
        this.year += Math.floor(this.month / 12);
        this.month = this.month % 12;
      }
    } else if (unit === Unit.DAYS) {
      this.day += amount;
    }
  }

  getYear(): number {
    return this.year;
  }

  getMonth(): number {
    return this.month;
  }

  getDay(): number {
    return this.day;
  }
}

const customDateVoidParams = new CustomDate();
console.log('() => ', customDateVoidParams.printFormat());

const customDateJustYear = new CustomDate(2022);
console.log('(2022) => ', customDateJustYear.printFormat());

const customDateYearMonth = new CustomDate(2022, 12);
console.log('(2022, 12) => ', customDateYearMonth.printFormat());

const customDateYearMonthDay = new CustomDate(2022, 12, 25);
console.log('(2022, 12, 25) => ', customDateYearMonthDay.printFormat());
