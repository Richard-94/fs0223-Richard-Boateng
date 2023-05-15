const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/"

let addressId = new URLSearchParams(window.location.search);
let eventId = addressId.get("eventId");
console.log("event",eventId);



 if(eventId){
    console.log(eventId);
    let deleteProduct = document.getElementById("delete")
    let inner = document.querySelector(".mod")
    console.log(inner);
    console.log(deleteProduct);
    let confirmDelete = `<div class="modal" id="exampleModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Confirm deletion</h1>
         
        </div>
        <div class="modal-body">
          <p class="text-black fs-4">Are you sure you want to delete the product?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary cancelBtn " data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger" id="confirmDeleteButton">Delete</button>
        </div>
      </div>
    </div>
  </div>`



  inner.innerHTML += confirmDelete;
  let canc = document.querySelector(".cancelBtn");
  canc.addEventListener("click",()=>{
    let modal = document.getElementById("exampleModal");
    modal.classList.remove("show");
    modal.style.display = "none";
    return;
});
  let confirmDeleteButton = document.getElementById("confirmDeleteButton");
    deleteProduct.addEventListener("click", () =>{
        let modal = document.getElementById("exampleModal");
        modal.classList.add("show");
        modal.style.display = "block";


        confirmDeleteButton.addEventListener("click", () => {
            fetch(PRODUCT_URL + eventId,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk0Yjg4Zjc0MDAwMTQyODc0NDQiLCJpYXQiOjE2ODM4ODAyNjgsImV4cCI6MTY4NTA4OTg2OH0.hLaOpgo7ZaB2rCH2j3Ik4w2TgMNW30pF2L35TavAwPI"
                },
                method:"DELETE"
            })
       
        .then((res)=>{
            if(res.ok){
                alert("Product cancelled!!");
                location.assign("index.html")
            }else{
                throw new Error("Problem eliminating the Product")
            }

        })
       .catch((err)=>{
        console.log(err);
       })
      
    })
        
    })
    let info = {};
    fetch (PRODUCT_URL + eventId,{
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk0Yjg4Zjc0MDAwMTQyODc0NDQiLCJpYXQiOjE2ODM4ODAyNjgsImV4cCI6MTY4NTA4OTg2OH0.hLaOpgo7ZaB2rCH2j3Ik4w2TgMNW30pF2L35TavAwPI"
        }
    })
    
    .then((res)=>{
        if(res.ok){
            return res.json()
        }else {
            throw new Error ("Error recovering information")
        }
    })

    .then((info)=>{
        
        document.getElementById('name').value=info.name
        console.log('Name:', info.name);
        document.getElementById("description").value= info.description;
        console.log('Description:', info.description);
        document.getElementById("price").value = info.price;
        console.log('Brand:', info.brand);
        document.getElementById("brand").value= info.brand;
        document.getElementById("img").value = info.imageUrl;
       
       
       

    })

    

    const modifyButton = document.getElementById("modifyMe");
    let storeInfo = {};
    console.log(storeInfo);
    console.log(modifyButton);
    modifyButton.addEventListener("click", function(e){
        e.preventDefault()
        console.log("invio");
        info.name = document.getElementById('name').value;
        info.description = document.getElementById("description").value;
        info.price = document.getElementById("price").value;
        info.brand = document.getElementById("brand").value;
        info.imageUrl = document.getElementById("img").value;
        storeInfo.name = info.name;
        storeInfo.description = info.description;
        storeInfo.price = info.price;
        storeInfo.brand = info.brand;
        storeInfo.imageUrl = info.imageUrl;
        for(let k in storeInfo){
            if(storeInfo[k]===""){
                alert("all fields must be filled")
            return
        }

            
        }
        fetch(PRODUCT_URL + eventId,{
            method: "PUT",
            body: JSON.stringify(info),
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk0Yjg4Zjc0MDAwMTQyODc0NDQiLCJpYXQiOjE2ODM4ODAyNjgsImV4cCI6MTY4NTA4OTg2OH0.hLaOpgo7ZaB2rCH2j3Ik4w2TgMNW30pF2L35TavAwPI",
                'Content-Type': 'application/json',
            },
        })
     .then((res) => {
        
        console.log('RESPONSE DELLA CHIAMATA POST', res)
       if (res.ok) {
          
           alert('EVENTO MODIFICATO!' )
           location.assign('index.html')
         } else {
          
           alert('ERRORE NEL SALVATAGGIO')
           throw new Error('ERRORE NEL SALVATAGGIO')
         }
       })

    .catch ((error)=>{
         console.log(error);
     })
    })

   
 }


















