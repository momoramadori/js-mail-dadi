//Creo Database
var emailDatabase = ["pincopallino@gmail.com", "mario.rossi@libero.it", "momo.rama@hotmail.it"];

//Chiedo all'utente di inserire la sua Email
var emailUtente = prompt("Inserisci la tua email");

//Verifico se l'email inserita può accedere creando un ciclo
for (var i = 0; i < emailDatabase.length; i++) {

    if ( emailUtente == emailDatabase[i] ) {
        console.log("Complimenti! Può accedere al nostro servizio!");
    }  else {
        console.log("Ci dispiace, ma non è in lista!");
    }
}
