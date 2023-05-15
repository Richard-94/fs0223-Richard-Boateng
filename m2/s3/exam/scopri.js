const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/"

let addressId = new URLSearchParams(window.location.search);
let eventId = addressId.get("eventId");
console.log("event",eventId);

const getProducts = function(){
    fetch(PRODUCT_URL+ eventId,{
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk0Yjg4Zjc0MDAwMTQyODc0NDQiLCJpYXQiOjE2ODM4ODAyNjgsImV4cCI6MTY4NTA4OTg2OH0.hLaOpgo7ZaB2rCH2j3Ik4w2TgMNW30pF2L35TavAwPI"
            }
    })
    
    .then((res)=>{
        if(res.ok) {
            return res.json()
        }
        else {
            throw new Error ("Error in ritrieving the products");
        }
    })
    
    .then((info) => {
        console.log(info);
        info.name 
        info.description 
        info.price 
        info.brand
        info.imageUrl 
        
        
            let template = `  <div class="container-fluid p-0 ">
            <div class="row g-4 align-items-center">
                <div class="col-5 m-0">
                <img class = "w-100" src=${info.imageUrl}>
                   
                </div>

                <div id="right" class="col-7 text-start bg-light mt-5 mb-5 rounded-3">
                    <div class="p-4 ">

                        <div>
                            <div class="mb-3">
                            <h5 class="card-title fs-1 mb-3">${info.name}</h5>
                            
                                <p class="fs-5 fw-normal">${info.description}</p>
                            </div>
                            <p class="card-text fs-4 mb-5">${info.brand}</p>
                            <p class="btn btn-white fs-2 bg-danger">${"$" + info.price}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>`
    
            let showCard = document.getElementById("showInfo");
            showCard.innerHTML +=template
        
    })
    
    .catch((error) => {
        console.log(error)
      })
}

window.onload = () => {
    getProducts();
}


