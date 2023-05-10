let personName = document.getElementById("name");

let personSurname = document.getElementById("surname");

let personBirth = document.getElementById("birth");

let saveFile = document.getElementById("send");

let ul = document.getElementById("textName");

let clean = document.getElementById("clear");

let store = []

class Person {
  constructor(userName, surname, placeOfBirth){
    this.userName = userName
    this.surname = surname
    this.placeOfBirth = placeOfBirth
  }

  toString() {
    return `${this.userName} ${this.surname} ${this.placeOfBirth}`;
  }
}


function recover(user){
  const transform = JSON.parse(localStorage.getItem("userInformation") || "[]");
  
  for(let i = 0; i < transform.length; i++){
    if(transform[i].userName === user.userName){
      return alert("username has been picked");
      // return store.pop()
      
    }else{
      store.push( user);
      const storage = JSON.stringify(store);
localStorage.setItem('userInformation', storage)

    }
  }
}

saveFile.onclick = (e) => {
  let newPerson = new Person(personName.value, personSurname.value, personBirth.value);
  e.preventDefault();
  if (personName.value === "" || personSurname.value === "" || personBirth.value === "") {
    alert("Please fill in all fields.");
    return;
  }

  let createP = document.createElement("li");
  createP.textContent = new Person ("first-Name:" + personName.value , "surname-Name:" + personSurname.value, "Place-of-birth:" + personBirth.value);
  ul.appendChild(createP);
  personName.value = "";
  personSurname.value = "";
  personBirth.value = "";
  personName.focus();
  recover(newPerson)
 
  console.log(store);
 
  

} 















//METODO GET

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
  console.log(res);
  if(res.ok){
    return res.json()
  }else{
    return new Error("errore nel contattare il server");
  }
})


.then((data)=>{
  console.log("lavoro qua dentro " + data);
})


.catch((err)=>{
  console.log(err);
})



// METODO PUT

fetch("https://jsonplaceholder.typicode.com/albums")
.then((res)=>{
if(res.ok){

}else {
  throw new Error("Errore nell'esecuzione della chiamata")
}
})

.then((albums)=>{
  console.log(albums);
})

.catch(()=>{

})