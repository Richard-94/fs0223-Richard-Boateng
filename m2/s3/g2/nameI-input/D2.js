let saveName= document.getElementById("send");
let saveData = document.getElementById("name")
let deleteMe = document.getElementById("delete")
let ul = document.getElementById("textName")

const showName = function(){
  let creatMe = document.createElement("li")
  creatMe.textContent = localStorage.getItem("firstSave")
  let list = ul.appendChild(creatMe);
  
}

saveName.onclick = (e) => {
  e.preventDefault();
  let saveMe = saveData.value;
 
   localStorage.setItem("firstSave", saveMe)
  saveData.value = ""
  showName()
} 





deleteMe.onclick = (e) => {
  e.preventDefault();
  let recoverItem = localStorage.getItem("firstSave")
  localStorage.removeItem("firstSave")
  ul.textContent = ""
} 


 window.onload =  function(){
    saveData.value =  localStorage.getItem("firstSave")
 }


