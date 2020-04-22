
// Chiedere un numero tra 1 e 6 all'utente
var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 6"));
console.log(numeroUtente);

//Vedere chi ha vinto e visualizzare il messaggio corrispondente
if (isNaN(numeroUtente) == true || numeroUtente < 1 || numeroUtente > 6) {
    console.log('hai dato un valore errato');
} else {
    //Generare un numero random con il computer tra 1 e 6
    var numeroComputer = Math.floor(Math.random() * 6) + 1;
    console.log(numeroComputer);
    if ( numeroUtente > numeroComputer ) {
        console.log('Complimenti, hai vinto!');
    } else if (numeroUtente == numeroComputer) {
        console.log('Parità!');
    } else {
        console.log('Hai perso, ritenta e sarai più fortunato!')
    }
}
