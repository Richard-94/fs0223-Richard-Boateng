import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './Models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  address:string = 'https://jsonplaceholder.typicode.com/photos'


  constructor(private http:HttpClient) { }

  getPictures():Observable<Album[]>{
    return this.http.get<Album[]>(this.address)
  }

  deletePic(id:number){
    return this.http.delete(this.address + '/' + id)
  }

  updatePic(id:number){
    return this.http.post<Album>(this.address + '/' + id, id)
  }
}




