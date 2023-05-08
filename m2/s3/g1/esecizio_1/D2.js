
class User {
  constructor(firstName, lastName, age, location){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }
  static confrontAge(user1, user2){
    if (user1.age > user2.age){
      return "the age of first user which is " + user1.age + " is bigger than " + user2.age
    }else{
      return "the age of first user which is " + user1.age + " is smaller than " + user2.age
    }
  }
  
  
}

let user1 = new User ("john", "Papit", 5, "ghana");
console.log(user1);

let user2 = new User ("Fabio", "Murrus", 10, "France");
console.log(user2);

console.log(User.confrontAge(user1, user2));



// ESERCIZIO 2

class Pet{
  constructor(petName, ownerName, species, breed){
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }
}

let storage = []


const creatList = function(){
  let allList = document.getElementById("listItems");
  allList.innerHTML = "";
  storage.forEach (function(user){
    let creatMe = document.createElement("li")
    creatMe.innerHTML = user.petName + "<br>" + user.ownerName + "<br>" + user.species + "<br>" + user.breed + "<br>";
    allList.appendChild(creatMe);
  })

}

let petName = document.getElementById("name");

let ownerName = document.getElementById("ownerName");


let btn = document.getElementById ("sub");

let options = document.getElementById ("specie");

let optionsBreed = document.getElementById ("bree")

btn.onclick = (e) => {
  e.preventDefault();
  let firstUser = new Pet (petName.value, ownerName.value, options.value, optionsBreed.value);
  storage.push(firstUser);
  petName.value = ""
  ownerName.value = ""
  creatList()

} 

