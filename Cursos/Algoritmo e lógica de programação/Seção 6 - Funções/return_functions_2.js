function returnOneFunction() {
  return function () {
    return "Boa tarde";
  };
}

console.log(returnOneFunction()());
