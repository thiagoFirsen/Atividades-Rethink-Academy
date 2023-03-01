class Date {
  day = 1;
  month = 1;
  year = 1970;

  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  exibr() {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const date1 = new Date();
date1.day = 24;
date1.month = 12;
date1.year = 2022;

const date2 = new Date(1, 2, 2022);

console.log(date1);
console.log(date2.exibr());
