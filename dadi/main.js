// Chiedere un numero tra 1 e 6 all'utente
var numeroUtente = prompt("inserisci un numero tra 1 e 6");
console.log(numeroUtente);

//Generare un numero random con il computer tra 1 e 6
var min = 1;
var max = 6;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger());

if () {

} else {

}
