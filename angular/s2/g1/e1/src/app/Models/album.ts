export class Album {
  id!: number;
  title!:string;
  url!:string;
  thumbnailUrl!:string;

  constructor(id:number, title:string, url:string, thumbnailUrl:string){
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl
  }

}
