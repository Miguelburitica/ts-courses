const date = new Date();

const hours = date.getHours();
const time = date.getTime();
const dateString = date.toISOString();

const date2 = new Date(1995, 11, 17);
const hours2 = date2.getHours();
const time2 = date2.getTime();
const dateString2 = date2.toISOString();

console.log({
  date,
  hours,
  time,
  dateString,
  date2,
  hours2,
  time2,
  dateString2,
})

export class CustomDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const customDate = new CustomDate(1995, 11, 17);
console.log(customDate);
