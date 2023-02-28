function executable(fun) {
  if (typeof fun == "function") console.log(fun());
}

function goodMorning() {
  return "Bom dia";
}

executable(goodMorning);

function executable() {
  console.log(goodMorning());
}

function goodMorning() {
  return "Good Morning";
}

executable();
