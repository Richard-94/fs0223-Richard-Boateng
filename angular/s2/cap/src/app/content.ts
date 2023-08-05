import { Images } from "./images";

export class Content {
  public authForm:{
   title?:string;
    location?:string;
    time?:string;
    price?:string;
    description?:string;
    address?:string;
    place?:string
    date?:string
   }={}

   public images:Images[];
   public types?:string[];
   public id?: string;


   constructor(title:string, location:string, place:string, date:string, time:string, price:string, description:string, address:string,images:Images[], types:[],id?: string){
     this.authForm.title = title;
     this.authForm.location= location;
     this.authForm.time = time;
     this.authForm.price = price;
     this.authForm.description = description;
     this.authForm.address = address;
     this.authForm.place= place;
     this.authForm.date= date;
     this.images=images || [];
     this.types=types;
     this.id= id;
   }

 }
