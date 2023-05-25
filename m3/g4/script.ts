const PRODUCT_URL = "Abbigliamento.json";

fetch(PRODUCT_URL)

.then(res=>res.json())

.then((res:Promise<Products>)=>{
    console.log(res);
    
})



class Products {
    capo: string;
    codprod: number;
    collezione: string;
    colore: any;
    disponibile: string;
    id: number;
    modello: number;
    prezzoivaesclusa: number;
    quantita: number;
    saldo: number;
  
    constructor(
      capo: string,
      codprod: number,
      collezione: string,
      colore: string,
      quantita: number,
      disponibile: string,
      id: number,
      modello: number,
      prezzoivaesclusa: number,
      prezzoivainclusa: number,
      saldo: number
    ) {
      this.capo = capo;
      this.codprod = codprod;
      this.collezione = collezione;
      this.colore = colore;
      this.disponibile = disponibile;
      this.id = id;
      this.modello = modello;
      this.prezzoivaesclusa = prezzoivaesclusa;
      this.prezzoivaesclusa = prezzoivainclusa;
      this.quantita = quantita;
      this.saldo = saldo;
    }
  
    calculateDiscount(priceVat: number, discountPercentage: number): number {
      return (priceVat * discountPercentage) / 100;
    }
  
    calculateTotalCost(discount: number, quantity: number): number {
      const discountAmount = this.calculateDiscount(this.prezzoivaesclusa, this.saldo);
      let totalCost: number;
  
      if (this.prezzoivaesclusa < 10) {
        totalCost = (this.prezzoivaesclusa - discountAmount) * quantity;
      } else {
        totalCost = (this.prezzoivaesclusa * quantity * (100 - discountAmount)) / 100;
      }
  
      return totalCost;
    }
  }
  
  class newProduct extends Products {
    prezzo(prezzo: any): number {
      throw new Error("Method not implemented.");
    }
  
    constructor(data: any) {
      super(
        data.capo,
        data.codprod,
        data.collezione,
        data.colore,
        data.quantita,
        data.disponibile,
        data.id,
        data.modello,
        data.prezzoivaesclusa,
        data.prezzoivainclusa,
        data.saldo
      );
    }
  }
  
  const productData = {
    "id": 2,
        //"codprod":4111,
        "collezione":"estate",
        "capo":"t-shirt",
        "modello":1251,
        "quantita":6,
        "colore":"rosso",
        "prezzoivaesclusa":5.50,
        "prezzoivainclusa":6.71,
        "disponibile":"magazzino",
        "saldo":30
  };
  
  let product1 = new newProduct({ codprod: 4111, ...productData });
  
  console.log("Discount:", product1.calculateDiscount(product1.prezzoivaesclusa, product1.saldo));
  console.log("Total Cost:", product1.calculateTotalCost(product1.calculateDiscount(product1.prezzoivaesclusa, product1.saldo), product1.quantita));
  console.log(product1);
  

// class Products{
//  capo: string;
//  codprod: Number;
//  collezione: string;
//  colore: any;
//  disponibile: string;
//     id: number;
//  modello: number;
//  prezzoivaesclusa: number;
//  quantita:number
//  saldo: number;
//  constructor
//     (
//         capo:string, 
//         codprod:Number, 
//         collezione:string, 
//         colore:string, 
//         quantita:number,
//         disponibile:string,
//         id:number, 
//         modello:number,
//         prezzoivaesclusa:number,
//         prezzoivainclusa:number,
//         saldo:number){

           

//             this.capo = capo;
//             this.codprod = codprod;
//             this.collezione = collezione;
//             this.colore = colore;
//             this.disponibile = disponibile;
//             this.id = id;
//             this.modello = modello;
//             this.prezzoivaesclusa = prezzoivaesclusa;
//             this.prezzoivaesclusa= prezzoivainclusa;
//             this.quantita=this.quantita
//             this.saldo = saldo

//     }

//     calculateDiscount(priceVat: number, discountPercentage: number): number {
//         return (priceVat * discountPercentage) / 100;
//       }
      
//       calculateTotalCost(discount: number, quantity: number): number {
//         const discountAmount = this.calculateDiscount(this.prezzoivaesclusa, this.saldo);
//         let totalCost: number;
      
//         if (this.prezzoivaesclusa < 10) {
//           totalCost = (this.prezzoivaesclusa - discountAmount) * quantity;
//         } else {
//           totalCost = (this.prezzoivaesclusa * quantity * (100 - discountAmount)) / 100;
//         }
      
//         return totalCost;
//       }
      

// }

// class newProduct extends Products{
//     prezzo(prezzo: any): number {
//         throw new Error("Method not implemented.");
//     }
    
//     constructor(data:any){
//         super(
//             data.capo,
//             data.codprod,
//             data.collezione,
//             data.colore,
//             data.disponibile,
//             data.id,
//             data.modello,
//             data.prezzoivaesclusa,
//             data.prezzoivainclusa,
//             data.quantita,
//             data.saldo
//           );
//     }
// }

// const productData = {
//     "id": 1,
    
//     "collezione": "primavera",
//     "capo": "cardigan",
//     "modello": 1231,
//     "quantita": 5,
//     "colore": "nero",
//     "prezzoivaesclusa": 18.50,
//     "prezzoivainclusa": 22.57,
//     "disponibile": "negozio",
//     "saldo": 45
//   };

//   let product1 = new newProduct({ codprod: 2121, ...productData });

 
//   console.log("Discount:", product1.calculateDiscount(product1.prezzoivaesclusa, product1.saldo));
//   console.log("Total Cost:", product1.calculateTotalCost(product1.calculateDiscount(product1.prezzoivaesclusa, product1.saldo), product1.quantita));
//   console.log(product1);