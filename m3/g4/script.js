var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PRODUCT_URL = "Abbigliamento.json";
fetch(PRODUCT_URL)
    .then(function (res) { return res.json(); })
    .then(function (res) {
    console.log(res);
});
var Products = /** @class */ (function () {
    function Products(capo, codprod, collezione, colore, quantita, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, saldo) {
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
    Products.prototype.calculateDiscount = function (priceVat, discountPercentage) {
        return (priceVat * discountPercentage) / 100;
    };
    Products.prototype.calculateTotalCost = function (discount, quantity) {
        var discountAmount = this.calculateDiscount(this.prezzoivaesclusa, this.saldo);
        var totalCost;
        if (this.prezzoivaesclusa < 10) {
            totalCost = (this.prezzoivaesclusa - discountAmount) * quantity;
        }
        else {
            totalCost = (this.prezzoivaesclusa * quantity * (100 - discountAmount)) / 100;
        }
        return totalCost;
    };
    return Products;
}());
var newProduct = /** @class */ (function (_super) {
    __extends(newProduct, _super);
    function newProduct(data) {
        return _super.call(this, data.capo, data.codprod, data.collezione, data.colore, data.quantita, data.disponibile, data.id, data.modello, data.prezzoivaesclusa, data.prezzoivainclusa, data.saldo) || this;
    }
    newProduct.prototype.prezzo = function (prezzo) {
        throw new Error("Method not implemented.");
    };
    return newProduct;
}(Products));
var productData = {
    "id": 2,
    //"codprod":4111,
    "collezione": "estate",
    "capo": "t-shirt",
    "modello": 1251,
    "quantita": 6,
    "colore": "rosso",
    "prezzoivaesclusa": 5.50,
    "prezzoivainclusa": 6.71,
    "disponibile": "magazzino",
    "saldo": 30
};
var product1 = new newProduct(__assign({ codprod: 4111 }, productData));
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
