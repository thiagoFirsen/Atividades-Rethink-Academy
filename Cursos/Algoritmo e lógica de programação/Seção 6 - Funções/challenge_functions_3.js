// Saber se o aluno esta reprovado; Menor nota descartada e duas notas tira a media;
//notas = 7.8;3.1;6.7
//Aprovado 7; Recuperação 4; Reprovado 0;

function calculateFinalScore(note1, note2, note3) {
  let lowestScore;
  lowestScore = note1 > note2 ? note2 : note1;
  lowestScore = lowestScore > note3 ? note3 : lowestScore;

  if (lowestScore === note1) note1 = 0;
  else if (lowestScore === note2) note2 = 0;
  else note3 = 0;

  let noteFinal = (note1 + note2 + note3) / 2;
  if (noteFinal > 7) return "Aprovado";
  else if (noteFinal > 4) return "Recuperação";
  else return "Reprovado";
}

console.log(calculateFinalScore(7.8, 3.1, 6.7));
console.log(calculateFinalScore(3, 4, 5));
console.log(calculateFinalScore(3, 2, 1));
