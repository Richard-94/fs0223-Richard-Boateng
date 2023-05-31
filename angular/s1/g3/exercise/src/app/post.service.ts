import { Injectable } from '@angular/core';
import { Post } from './Models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 address:string = "assets/db.json"

 constructor() { }

  async getPost():Promise<Post[]>{
   const res = await fetch(this.address);
    return await res.json();
 }
}
