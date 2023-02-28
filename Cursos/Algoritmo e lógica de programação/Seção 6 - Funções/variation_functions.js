//COM parametro e COM retorno
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(30, 56));

//COM parametro e SEM retorno
function multiply(num1, num2) {
  console.log(num1 * num2);
}

multiply(10, 21);
//SEM parametro e COM retorno
function returnsCurrentDate() {
  return new Date();
}
console.log(returnsCurrentDate());
//SEM parametro e SEM retorno
function displayCurrentTime() {
  console.log(new Date().getHours());
}
displayCurrentTime();
