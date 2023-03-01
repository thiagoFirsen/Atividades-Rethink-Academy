//Data - Dia, Mes, Ano
const date = {
  day: 21,
  month: 4,
  year: 1997,
  exibir: function () {
    return `${this.day}/${this.month}/${this.year}`;
  },
};

console.log(date.exibir());
