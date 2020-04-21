// Chiedere un numero tra 1 e 6 all'utente
var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 6"));
console.log(numeroUtente);

//Generare un numero random con il computer tra 1 e 6
var min = 1;
var max = 6;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (6 - 1 + 1 ) ) + 1;
}

console.log(getRndInteger());

if (getRndInteger() > numeroUtente) {
    console.log("Ha vinto il Computer!");
} else if (getRndInteger() == numeroUtente ) {
    console.log("Parità Assoluta!");
} else if (getRndInteger() < numeroUtente ) {
    console.log("Complimenti, hai vinto!");
}
