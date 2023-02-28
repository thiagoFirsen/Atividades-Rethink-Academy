function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 4));

function add2(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const sum2 = add2(5);

console.log(add2(5)(4));
console.log(sum2(4));
