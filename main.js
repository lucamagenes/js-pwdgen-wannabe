//Chiedi all'utente il suo nome
const user_name = prompt("Ciao, qual'è il tuo nome?");


//Chiedi all'utente il suo cognome
const user_last_name = prompt("Qual'è il tuo cognome?");


//Chiedi all'utente il suo colore preferito
const user_favourite_color = prompt("Qual'è il tuo colore preferito?");


const current_year = 21;

//console
console.log(user_name + user_last_name + user_favourite_color);

const password = user_name + user_last_name + user_favourite_color + current_year;

//scrivi a schermo i dati dell'utente
document.getElementById("password").innerHTML = password