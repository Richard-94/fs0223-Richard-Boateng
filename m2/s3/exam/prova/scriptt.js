
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let a = 10;
let b = 20
let sum = a + b;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.round(Math.random()*21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name:"Richard",
  surname:"Boateng",
  age:"29"
  
}

console.log(me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

  delete me.age


console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
  me.skills = ["HTML","CSS","Javascript"];
 console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Java");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
var save = function dice() {
  let roll = Math.floor(Math.random()*6);
  let howManyTimes = roll+1
  return (howManyTimes);
}
console.log(save());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b){
    return (a + " is bigger")
  }else{
    return (b + " is bigger")
  }

}
console.log(whoIsBigger(10,60));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(text) {
  return text.split(" ");
}
console.log(splitMe("i love you "));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str,boolean){
  if(boolean){
    return str.slice(1);
  }
  else {
    return str.slice(0,-1)
  }
  
}
console.log (deleteOne("ciao",true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(someText) {

  return someText.replace(/\d+/g, '')
}
console.log(onlyLetters("i have 5 cats and 90 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email){
    let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
    
}
console.log(isThisAnEmail("example.@gmail.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  let today = new Date;
  let actualDay =  today.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let newDay = days[actualDay];
  return newDay
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(casualNumber) {
  let memory = []
  let values= []
  for (let i = 0; i<casualNumber ; i++){
    memory.push(i)
    values.push(save());
    
  }
  let sumNumbers = values.reduce(function(a,b){
    return a+b
  })
  return sumNumbers
}

console.log(rollTheDices(5));


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


function howManyDays(actualYear, actualMonth, actualDay) {
  let myDay = new Date();
  let newDays = myDay.getDate();
  let newMonth = myDay.getMonth() + 1;
  let currentYear = myDay.getFullYear();
  if (actualYear < currentYear) {
    let s = (currentYear - actualYear) * 12 * 30;
    let allDays = (12 - actualMonth + 1) * 30;
    let p = allDays + (newMonth - 1) * 30 + newDays;
    let b = s - p;
    return b;
  } else {
    let daysDiff = (myDay.getTime() - new Date(actualYear, actualMonth - 1, actualDay).getTime()) / (1000 * 3600 * 24);
    return Math.round(daysDiff)-1;
  }
}

console.log(howManyDays(2023,4,15));


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/


 function isTodayMyBirthday( birth, month, birthday) {
   let year = new Date;
   let a = year.getFullYear();
   let b = (year.getMonth()+1);   
   let c = year.getDate();
   if(birth === a && month === b && birthday===c){
    return true
   }
   else{
    return false
   }
  
 }
console.log(isTodayMyBirthday(2023,04,15));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(objects,str) {
  movies.forEach(function(removeObject, index){
    if(removeObject[objects] ===str){
      movies.splice(index, 1)
    }
  })
  return movies
}

console.log(deleteProp("Year", "1978"));
  
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(){
  let newest = null
  movies.forEach(function(films){
    if(newest=== null || films.Year > newest.Year){
      newest = films;
    }
  })
  return newest
}
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(){
 return movies.length
}
console.log(countMovies());
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

let allYears = [];
function onlyTheYears() {
  for(let only of movies){
    allYears.push (only.Year);
    console.log(allYears);
  }
  return
  
}
(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(){
  let moviesAfter2000 = movies.filter(function(movie){
    return movie.Year > 2000
  })
  return moviesAfter2000
 
}
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let sumAll = movies.reduce(function(a, b){
    return a + parseInt(b.Year)
  }, 0)
  return sumAll
}
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(Title) {
  let mySearch = movies.filter(function(searchAll){
    return searchAll.Title.includes(Title);
  })
  return mySearch
  
}
console.log(searchByTitle("The Lords of Salem"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

let match = [];
let unmatch = []
 function searchAndDivide(Title) {
  movies.filter(function(allMovies){
    if (allMovies.Title.includes(Title)) {
      match.push(allMovies)
    }
    else{
      unmatch.push(allMovies)
    }
  })
  return
 }
(searchAndDivide("Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(IndexToRemove) {
  let newIndex = movies.splice(IndexToRemove,1);
  
  return movies
}

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function getId() {
  return document.querySelector("#container");
}
console.log(getId());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function allTd() {
  let td = document.querySelectorAll("td");
  for(let allTd of td){
    //allTd.style.color="red"
    
  }
  return  
}
allTd()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
 function content(){
   let text = document.querySelectorAll("td");
   for (let print of text){
    console.log(print.textContent);
   }
   return
  
 }
 content();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function background() {
  let a = document.querySelectorAll("a")
  for(let anchor of a){
    anchor.style.backgroundColor = "red"
  }
  return
}
background();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function newList() {
  let ul = document.querySelector("#myList ul");
  let li = document.createElement("li");
  li.textContent = "telephone";
  ul.append(li);
  return;
  
}
newList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function empty() {
  let list = document.querySelector("#myList ul")
  list.innerHTML = ''
  return
}
empty()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass() {
  let tr = document.querySelectorAll("tr");
  for(let newClass of tr){
    newClass.classList.add("myClass")
  }
  return
  
}
addClass()
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  ** 
  ***

*/

 var tree = function thowNumber() {
   let newNumber = Math.floor(Math.random());
   newNumber = "*"
   let howMany = newNumber
   return (howMany);
 }
 tree();

 var normal = function halfTree(ricieve) {
 let allValues= " "
   for (let i = 0; i<ricieve ; i++){
     allValues+=(tree());
     console.log(allValues);
   }
   return 
 }

 normal(10);



/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

//NON è FINITO
var newTree = function anotherNumber() {
  let newSymbol = Math.floor(Math.random());
  newSymbol = "*"
  let howManySymbols = newSymbol
  return (newSymbol);
}


var normalize = function halfTree(putNumber) {
  let newValues= []
  let k = []
    for (let i = 0; i<putNumber ; i++){
      newValues += (newTree());
      console.log(newValues);
    }
    return newValues
    var newField= function another() {
      let sym = Math.floor(Math.random());
      sym = "*"
      let howManySym =sym
      return (sym);
      let u = newValues.unshift(sym)
      k.push(u)
      console.log(k);
    }
   return
  }
  
  normalize(20);

  


  

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

 function isItPrime(theNumber) {
 
   if(theNumber%2===0){
     return false
   }
   else if(theNumber/theNumber===1 && theNumber/1===theNumber ) {    
     return true
   }
   else if(theNumber/theNumber===1 && theNumber/1===theNumber){
     return true
   }
   return
 }
 console.log(isItPrime(35));




function isItPrime(theNumber) {
  if (theNumber <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(theNumber); i++) {
    if (theNumber % i === 0) {
      return false;
    }
  }
  return true;
}


/* Questo array viene usato per gli esercizi. Non modificarlo. */

