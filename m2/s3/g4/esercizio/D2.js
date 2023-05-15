let myKey = "hB1igwYa6IFmX5pPAhspiiNOfvTxSlVWqG0spk3rfLt0MYrx9zv9SqY8"





const PICTURES_URL = "https://api.pexels.com/v1/search?query=mountains&per_page=9"
const SECCONDARY_PIC_URL =  "https://api.pexels.com/v1/search?query=cars&per_page=9"

const loadAll = function loadImages (url) {
 
  fetch(url, {
    headers:{
      Authorization : myKey
    }
  })
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
    let usersList = document.querySelectorAll('.card');
    usersList.forEach((user) => {
      
      data.photos.forEach(element => {
        let div = document.createElement('div');
        div.classList.add("card","col-sm-6","col-sm-6","col-xl-4")
        div.innerHTML = ` <div class="card mb-4 shadow-sm">
        <img src="${element.src.medium}" class="card-img-top" alt="${element.alt}"></img>
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                hide
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>`
        usersList.forEach((user) => {
          user.appendChild(div);
          });
    });
  
    });
  })
  
  
  
  .catch((err)=>{
    console.log(err);
  })
  
}



window.onload = function(){
  let load = document.getElementById("load_images");
load.addEventListener("click", function() {
  loadAll(PICTURES_URL);
});

let loadSecondaruPic = document.getElementById("load_sec_images");
loadSecondaruPic.addEventListener("click", function() {
  loadAll(SECCONDARY_PIC_URL);
});



}

