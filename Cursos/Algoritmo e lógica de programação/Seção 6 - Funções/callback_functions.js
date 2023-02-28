function alwaysReturnOne() {
  return 1;
}

function stringOrNumber(returnString) {
  return returnString ? "Sou um texto" : 123;
}
let value = alwaysReturnOne();
console.log(value);

let result = stringOrNumber(false);
console.log(result);
