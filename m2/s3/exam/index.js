const PRODUCT_URL = "https://646f3c3309ff19b12086d651.mockapi.io/capoabbigliamento/"

const getProducts = function(){
    fetch(PRODUCT_URL,{
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
    
    .then((retrieve) => {
        console.log(retrieve);
        retrieve.forEach((recieve)=>{
            let template = ` <div class="col-sm-6 col-xl-4 mb-4">
            <div class="card text-start p-0 position-relative">
            <img img class = "w-100" src=${recieve.imageUrl} >
            <a class = "text-center" href="scopri.html?eventId=${recieve._id}"><p class="btn text-center fs-4 fw-bold">Explore more</p></a>

                <span class="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger mt-3 p-3">
                    ${"$" + recieve.price}
                    <span class="visually-hidden">unread messages</span>
                </span>

             
                <div class="card-body">
                    <h5 class="card-title">${recieve.name}</h5>
                    <p class="card-text">${recieve.description}</p>
                        <div class="d-flex justify-content-between ">
                          <p class="btn btn-danger remove">${recieve.brand} </p>
                          <a href="modifications.html?eventId=${recieve._id}"><p class="btn btn-info">Modify</p></a>
                        </div>
                    
                </div>
            </div>
            </div>`
    
            let showCard = document.getElementById("myCard");
            showCard.innerHTML +=template
        })
    })
    
    .catch((error) => {
        console.log(error)
      })
}

window.onload = () => {
    getProducts();
}

