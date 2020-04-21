// Chiedere un numero tra 1 e 6 all'utente
var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 6"));
console.log(numeroUtente);

//Generare un numero random con il computer tra 1 e 6
var numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);

//Vedere chi ha vinto e visualizzare il messaggio corrispondente
if ( numeroUtente > numeroComputer ) {
    console.log('Complimenti, hai vinto!');
} else if (numeroUtente == numeroComputer) {
    console.log('Parità!');
} else {
    console.log('Hai perso, ritenta e sarai più fortunato!')
}
