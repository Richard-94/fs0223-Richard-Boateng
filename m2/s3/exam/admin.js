const resetForm = document.getElementById("reset");

function clean(e){
    e.preventDefault()
    let storage = {};
    storage.nameOfProduct = document.getElementById("name");
    storage.description = document.getElementById("description");
    storage.price = document.getElementById("price");
    storage.brand = document.getElementById("brand");
    storage.image = document.getElementById("img")
    console.log(storage);
    for(let key in storage){
        storage[key].value=""     
    }
    return 
}
resetForm.addEventListener("click", clean);

const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/"

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

.then((product)=>{
    console.log(product)
    let nameOfProduct = document.getElementById("name");
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let brand = document.getElementById("brand");
    let image = document.getElementById("img")
    let saveButton = document.getElementById("save-button")

    class Products {
        constructor(product, productDescription, productPrice, productBrand, productImage){
            this.name = product;
            this.description = productDescription;
            this.price = productPrice;
            this.brand = productBrand;
            this.imageUrl = productImage;
        }

        toString() {
            return `${this.name} ${this.description} ${this.price} ${this.productBrand} ${this.imageUrl}`;
        }
    }

    saveButton.onclick = (e)=>{
        let newProduct = new Products (nameOfProduct.value, description.value, price.value, brand.value, image.value);
        e.preventDefault();
        console.log(newProduct);
        nameOfProduct.value = "";
        description.value ="";
        price.value = "";
        brand.value = "";
        image.value = "";
        nameOfProduct.focus()

        fetch(PRODUCT_URL,{
            
                method:"POST",
                body:JSON.stringify(newProduct),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk0Yjg4Zjc0MDAwMTQyODc0NDQiLCJpYXQiOjE2ODM4ODAyNjgsImV4cCI6MTY4NTA4OTg2OH0.hLaOpgo7ZaB2rCH2j3Ik4w2TgMNW30pF2L35TavAwPI"
                },
        })
        .then ((res)=>{
            console.log(res);

            if(res.ok){
                alert("product sent");
            }else{
                alert("saving error");
                throw new Error("saving error");
            }
        })
        
    }  

})

.catch((error)=>{
    console.log(error);
})