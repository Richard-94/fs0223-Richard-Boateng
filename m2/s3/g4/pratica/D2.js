

fetch("https://striveschool-api.herokuapp.com/books")
.then((res)=>{
  console.log(res);
  if(res.ok){
    return res.json()
  }else{
    return new Error("errore nel contattare il server");
  }
})


.then((data)=>{
  console.log(data);
  let usersList = document.querySelector('#users-list')
  data.forEach((user) => {
    let div = document.createElement('div');
    div.classList.add("col-sm-6", "col-md-4", "col-xl-3")
    
    div.innerHTML = `
    <div class="card">
      <img src="${user.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${user.title}</h5>
        <p class="card-text"> ${user.price}</p>
        <button id ="delete"  type="button" class="btn btn-primary">Scarta</button>
        <a href="#" class="btn btn-secondary ms-5">compra ora</a>

        
      </div>
    </div>
  `;
  let p = document.querySelectorAll("p");
    for(let i = 0; i < p.length; i++){
      p[i].classList.add("fs-5")
    }

    let img = document.querySelectorAll("img");
    for(let i = 0; i < img.length; i++){
      img[i].classList.add("img-fluid")
    }


    usersList.appendChild(div);


   
  })

  
 
  let deleteMe = document.getElementById("delete");
  deleteMe.onclick = () => {
       
   
        console.log(deleteMe);
    
      }
    
})

.catch((err)=>{
  console.log(err);
})

