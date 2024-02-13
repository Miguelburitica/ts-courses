// Run: deno run src/02-methods.ts
export class CustomDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.year}-${this.month}-${this.day}`;
  }

  add(amount: number, unit: 'years' | 'months' | 'days'): void {
    if (unit === 'years') {
      this.year += amount;
    } else if (unit === 'months') {
      this.month += amount;
      if (this.month > 12) {
        this.year += Math.floor(this.month / 12);
        this.month = this.month % 12;
      }
    } else if (unit === 'days') {
      this.day += amount;
    }
  }
}

const customDate = new CustomDate(1995, 11, 17);
console.log(customDate.printFormat());
customDate.add(3, 'years');
customDate.add(2, 'months');
console.log(customDate.printFormat());
