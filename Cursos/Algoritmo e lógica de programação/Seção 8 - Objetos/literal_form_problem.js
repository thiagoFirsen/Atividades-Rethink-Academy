//DADOS REPETITIVOS
const date1 = {
  day: 21,
  month: 4,
  year: 1997,
  exibir: function () {
    return `${this.day}/${this.month}/${this.year}`;
  },
};

const date2 = {
  day: 22,
  month: 4,
  year: 1997,
  exibir: function () {
    return `${this.day}/${this.month}/${this.year}`;
  },
};

const date3 = {
  day: 23,
  month: 4,
  year: 1997,
  exibir: function () {
    return `${this.day}/${this.month}/${this.year}`;
  },
};

console.log(date1.exibir());
console.log(date2.exibir());
console.log(date3.exibir());
