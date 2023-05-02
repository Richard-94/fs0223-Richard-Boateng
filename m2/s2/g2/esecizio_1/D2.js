/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// Stringa = la stringa è il dato pricipale di qualsiasi linguaggio. E' una sequenza
// di lettere e numeri racchiusi all'interno di apici che possono singoli o doppi.

// Number = il number è essenzialmente un numero. Il numero in JS può sia essere un numero
// intero che numeri decimali

// Boolean: I boolean sono molto semplici. Sono bianchi o neri, nessuna 
// via di mezzo. Solo che al posto di bianco o nero,abbiamo true o false.valueOf

// Array : Gli array sono insieme di DataView. Possomo contenere qualsiasi 
// dato descritto StereoPannerNode, e ScriptProcessorNodecontenere al loro interno anche altri array.
// Objects: Gli oggetti sono simili agli array, ma a differenza di questi ultimi i dati al loro loro interno
// sono formati da coppia nome = valore. Esempio :"nome " : "mario". Gli objects al loro interno possono
// anche ospitare funzioni. 



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Richard";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 12;
let numero2 = 20;
let somma = numero + numero2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nome = "Boateng";
const cognome = "Boateng";

//cognome = Nasso;
console.log(cognome);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
sottrazione = 4-x;
console.log(sottrazione);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let result = (name1==name2);
 console.log(result);
let text = name2.toLowerCase() 
console.log(text);

 let result2 = (name1.toLowerCase() == name2.toLowerCase())
 console.log(result2)
