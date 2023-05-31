 export class Post {

  id:number
  title: string;
  active: boolean;
  type:string;

  constructor(title:string,active:boolean, id:number,type:string){
    this.title=title;
      this.active =active;
      this.id = id;
      this.type = type;
    }
 }
