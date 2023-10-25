// *Il Generatore di Tabelle di Moltiplicazione*: Chiedi all'utente di inserire un numero da 1 a 10. Quindi, genera una tabella di moltiplicazione per quel numero. Mostra il risultato della moltiplicazione del numero dell'utente per il numero dell'iterazione corrente. Ad esempio, se l'utente inserisce 5, il programma dovrebbe visualizzare: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, ..., 5 x 10 = 50 */

/*
let numeroUtente = prompt('Scrivi numero da 1 a 10');
let numeroUtenteNum = Number(numeroUtente);
let i = 1;
while(i <=10) {
    let moltiplicazione = numeroUtenteNum * i;
    console.log(numeroUtente+ "x" + i + '=' + moltiplicazione);
    i ++;
}
*/

// *Il Sostitutore di Parole*: Chiedi all'utente una frase e due parole: una da trovare e una con cui sostituirla. Sostituisci tutte le occorrenze della parola specificata nella frase.

/*
let prompt1 = prompt("Scrivi una frase");
let prompt2 = prompt("Scegli una parola da cambiare");
let prompt3 = prompt("Scegli un altra parola");

let fraseCambiata = prompt1.replaceAll(prompt2, prompt3);

console.log(fraseCambiata);
*/

//*Il Validatore di Siti Web*: Chiedi all'utente un URL di un sito web. Controlla se l'URL inizia con "http://" o "https://", e se termina con ".com". Se non lo fa, informa l'utente che potrebbe non essere un URL valido.

/*
let url = prompt("Scrivi un URL");
let validUrl = (url.startsWith("http://") || url.startsWith("https://")) && url.endsWith(".com");
if (!validUrl) {
  alert("errore");
}
*/

/* *La Sfida del Lancio del Dado*: Scrivi un programma che simula un gioco di lancio del dado tra l'utente e il computer. Sia l'utente che il computer lanciano un dado a sei facce, e quello con il tiro più alto vince. 
BONUS: Ripeti il gioco fino a quando l'utente decide di smettere. Tieni traccia di quanti giochi l'utente e il computer vincono ciascuno, e mostra i punteggi dopo ogni partita.
*/

/*
let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoComputer = Math.floor(Math.random() * 6) + 1;
prompt("Schiacci un bottone per giocare");
let user = console.log(dadoUtente);
let computer = console.log(dadoComputer);

if (dadoUtente > dadoComputer) {
  alert("Hai vinto");
} else if (dadoUtente === dadoComputer) {
  alert("Pareggio");
} else {
  alert("Hai perso");
}
*/

// per il bonus utiliziamo un WHILE  con IF

/*  *Il Gioco dell'Indovinello*: Genera un numero casuale tra 1 e 10. Chiedi all'utente di indovinare il numero. Se indovinano troppo alto, dì loro di indovinare più basso. Se indovinano troppo basso, dì loro di indovinare più alto. Se indovinano il numero, congratulati con loro. 
BONUS: all'inizio del gioco, l'utente sceglie la difficoltà, inserendo il numero più alto per il gioco. Genera un numero casuale tra 1 e il numero scelto. */

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
let numeroUtente = prompt("Indovina il numero da 1 a 10");
console.log(numeroUtente);
let numeroUtenteNum = Number(numeroUtente);

if (numeroUtenteNum === randomNumber) {
  alert("Hai indovinato");
} else if (numeroUtenteNum < randomNumber) {
  alert("Prova più alto");
} else if (numeroUtenteNum > randomNumber) {
  alert("Prova più basso");
}

xxx;
