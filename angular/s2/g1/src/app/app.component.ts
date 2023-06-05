import { Component, OnInit } from '@angular/core';
import { PicturesService } from './pictures.service';
import { Album } from './Models/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  favoriteCounts: { [key: number]: number } = {};

  constructor(private allPicture:PicturesService){}

  picArray:Album[] = [];

  ngOnInit(): void {
    this.allPicture.getPictures().subscribe(res => {
      this.picArray = res
    })
  }

  eliminate(id:number){
    this.allPicture.deletePic(id)
    .subscribe(res =>{
      const index = this.picArray.findIndex(cancel => cancel.id ===id);
      if(index !==-1){
        this.picArray.splice(index, 1);
        this.picArray = [...this.picArray]
      }
    })
  }

  modify(id: number) {

    if (this.favoriteCounts[id]) {
      this.favoriteCounts[id]++;
    } else {
      this.favoriteCounts[id] = 1;
    }
  }

  getFavoriteCount(id: number): number {
    return this.favoriteCounts[id] || 0;
  }


}
