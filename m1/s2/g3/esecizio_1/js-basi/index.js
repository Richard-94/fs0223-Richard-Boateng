// // alert("hello");

// // var saluto = document.getElementById("saluto").innerHTML = "hello world"


// // FUNZIONE

// // function saluto(){
// //     console.log("hello Ghana");
// // }
// // saluto();

// // document.getElementById("testo").innerHTML = "hello you";
// // //alert("hello world");

// // GESTIONE APPICI

// var html = "<div class=\"prova\">Ciao</div>";
// document.write(html);

// var html2 = '<div class="prova">che bello l\'html</div>';
// document.write(html2)

// var nome = "Mario";
// var anni = 30;

// document.write(`Ciao, mi chaimo ${nome}, ed ho ${anni}anni`);


// // LET CONST

// var a = 0

// {
//     console.log(a)
// }

// {
// var b = 0
// }
// console.log(b)


// let c =1
// {
//     console.log(c);
// }

// // {
// //     let d = 2
// // }

// // console.log(d);//non visibile, perche nasce nel blocco precedente

// let e;
// {
//     e = 10;
// }
// console.log(e);

// //CASI PARTICOLARI

// //var e = 8; // l'idendificatore e è gia stata assehnata di let

// var f = 9;
// {
//     //console.log(f);//la var f creata fuori dal blocco viene eliminata
//     let f = 11;
//     console.log(f);
// }


// //CONST

// const NOME_UTENTE = "Mario";

// //NOME_UTENTE = "Giacomo";//errore


// //SCOPE FUNZIONI

// //OBJECT.FREEZE (OGGETTO) SE SI VOLESSE BLOCCARE I RIASSEGNAMENTI
// //ANCHE PER I VALORI DEGLI OGGETTI
// const OGGETTO = {
//     nome : "Mario",
//     anni: 30
// }
// OGGETTO.nome = "Maria";
// console.log(OGGETTO);


// //SCOPE VARIABILI NELLA FUNZIONI

// let p = 0;
// function prova(){
//     console.log(p);//raggiungibile da p
// }
// prova();

// function prova(){
//     let y = 200; 
// }
// console.log(y);//non raggiungibile perche è fuori dalla funzione

// NULL

//let anni = prompt ("quanti anni hai?")//restituisce stringa

let x = document.write("hello world");
console.log(x);// x non riceve un valore, quindi è undefined

let div = document.getElementById("test");
console.log(div);//restituisce null perche non trova il div test
