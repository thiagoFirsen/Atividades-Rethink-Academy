function returFunction() {
  function goodMorning() {
    return "Bom dia";
  }
  return goodMorning;
}

console.log(returFunction()());
