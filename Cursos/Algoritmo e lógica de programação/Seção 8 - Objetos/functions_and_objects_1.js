function createDate(day, month, year) {
  return {
    day: day,
    month: month,
    year: year,
    exibir() {
      return `${this.day}/${this.month}/${this.year}`;
    },
  };
}

const date1 = createDate(21, 4, 1997);
const date2 = createDate(22, 4, 1997);
const date3 = createDate(23, 4, 1997);

console.log(date1.exibir());
console.log(date2.exibir());
console.log(date3.exibir());
