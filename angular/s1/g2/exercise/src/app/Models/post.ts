 export class Post {

  body!:string
  title!: string;
  active!: boolean;

  constructor(body:string,title:string,active:boolean){
    this.body = body;
    this.title=title;
      this.active =active
    }
 }
