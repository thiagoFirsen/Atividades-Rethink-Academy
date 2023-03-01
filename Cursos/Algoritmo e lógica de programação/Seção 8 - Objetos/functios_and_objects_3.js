function Date(day = 1, month = 1, year = 2021) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.exibir = function () {
    return `${this.day}/${this.month}/${this.year}`;
  };
}

const date1 = new Date();
const date2 = new Date(24, 12, 2022);
const date3 = new Date(25, 12, 2022);
console.log(date1.exibir());
console.log(date2.exibir());
console.log(date3.exibir());
