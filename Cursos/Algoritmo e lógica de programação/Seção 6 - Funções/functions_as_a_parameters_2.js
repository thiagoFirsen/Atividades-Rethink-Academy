function executable(fun, num1, num2) {
  if (typeof fun == "function") console.log(fun(num1, num2));
}

function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}
function sub(num1 = 0, num2 = 0) {
  return num1 - num2;
}
function multiply(num1 = 0, num2 = 0) {
  return num1 * num2;
}

executable(add, 50, 20);
executable(sub, 50, 20);
executable(multiply, 50, 20);
