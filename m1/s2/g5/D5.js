/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
             console.log(pets[0]);
             console.log(pets[1]);
             console.log(pets[2]);
             console.log(pets[3]);
             
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/  
console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/  let move = pets.shift(1);
  (pets.push(move));
  console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log(cars[0].licencePlate= "AS 956 GS")
//console.log(cars[0]);

console.log(cars[1].licencePlate= "GG 956 WS")
//console.log(cars[1]);

console.log(cars[2].licencePlate= "VW 006 NS")
//console.log(cars[2]);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newObject = {
  brand: "Fiat",
  model: "Punto",
  color: "orange",
  trims: ["opaque", "sports", "a-barth"],
}
console.log(cars.push(newObject));


for(let canc= 0; canc<cars.length;canc++){
  let eliminate = cars[canc].trims
  console.log(eliminate.pop());
}
  console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let save= 0; save<cars.length;save++){
  let newElement = cars[save].trims.shift()
  console.log(justTrims.push(newElement));
  //console.log(justTrims);
  
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let cycle= 0; cycle<cars.length;cycle++){
  let letter = cars[cycle].color
  let alphabet = letter.slice(0,1);
  if(alphabet === "b"){
    console.log("Fizz")
  }else{
    console.log("Buzz");
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


let run = [];
  let i = 0
   let k = numericArray
   //console.log(k);
   while(i<k.length){
    if(k ==32) break;
      k++;
    console.log(k);
   }
  
//   let i = 0
//   let k = numericArray
//    do{
//   console.log(k[i]);
//    k++;
//  }while(i<k.length)
  

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
