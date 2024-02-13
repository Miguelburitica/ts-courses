// Run: deno run src/02-methods.ts
enum Unit {
  YEARS = 'years',
  MONTHS = 'months',
  DAYS = 'days',
}

export class CustomDate {
  private year: number = 0;
  private month: number = 0;
  private day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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

const customDate = new CustomDate(1995, 11, 17);
customDate.add(3, Unit.YEARS);
console.log(customDate.printFormat());
console.log(customDate.getYear());
