export class Album {
  id!: number;
  title!:string;
  url!:string;
  thumbnailUrl!:string;

  constructor(id:number, tittle:string, url:string, thumbnailUrl:string){
    this.id = id;
    this.title = tittle;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl
  }

}
