// Run: deno run src/02-methods.ts
enum Unit {
  YEARS = 'years',
  MONTHS = 'months',
  DAYS = 'days',
}

export class CustomDate {
  constructor(
    private _year: number = 1993,
    private _month: number = 7,
    private _day: number = 9,
    public timezone: string = 'UTC'
  ) {}

  printFormat(): string {
    return `${this._year}-${this.addPadding(this._month)}-${this.addPadding(this._day)}`;
  }

  private addPadding(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  add(amount: number, unit: Unit): void {
    if (unit === Unit.YEARS) {
      this._year += amount;
    } else if (unit === Unit.MONTHS) {
      this._month += amount;
      if (this._month > 12) {
        this._year += Math.floor(this._month / 12);
        this._month = this._month % 12;
      }
    } else if (unit === Unit.DAYS) {
      this._day += amount;
    }
  }

  getYear(): number {
    return this._year;
  }

  getMonth(): number {
    return this._month;
  }

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    return this._year % 4 === 0 && (this._year % 100 !== 0 || this._year % 400 === 0);
  }

  set month(month: number) {
    if (month > 0 && month < 13) {
      this._month = month;
    }
  }
}

const customDate = new CustomDate(2000, 2, 29);
console.log('() => ', customDate.printFormat());

customDate.month = 12;
console.log('after edit => ', customDate.printFormat());

customDate.month = 13;
console.log('after edit => ', customDate.printFormat());

