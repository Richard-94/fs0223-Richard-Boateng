import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './Models/album';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  address:string = 'https://jsonplaceholder.typicode.com/photos'


  constructor(private http:HttpClient) { }

  getPictures(){
    return this.http.get<Album[]>(this.address)
  }

  deletePic(id:number){
    return this.http.delete(this.address + '/' + id)
  }
}




