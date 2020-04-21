//Creo Database
var emailDatabase = ["pincopallino@gmail.com", "mario.rossi@libero.it", "momo.rama@hotmail.it"];

//Chiedo all'utente di inserire la sua Email
var emailUtente = prompt("Inserisci la tua email");

//Opz1
//Verifico se l'email inserita può accedere creando un ciclo
for (var i = 0; i < emailDatabase.length; i++) {

    if ( emailUtente == emailDatabase[i] ) {
        console.log("Complimenti, sei in lista!");
    }  else {
        console.log("Ci dispiace, ma non sei in lista!");
    }
}

//Opz2
//Verifico se l'email inserita può accedere creando un ciclo
var mailTrovata = false;
for (var i = 0; i < emailDatabase.length; i++) {
    if ( emailUtente == emailDatabase[i] ) {
        mailTrovata = true;
    }
}

if (mailTrovata == false) {
    console.log('Ci dispiace, ma non sei in lista!');
} else {
    console.log('Complimenti, sei in lista!');
}
