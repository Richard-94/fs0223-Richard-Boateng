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

  constructor(private allPicture:PicturesService){}

  picArray:Album[] = [];

  ngOnInit(): void {
    this.allPicture.getPictures().subscribe(res => {
      this.picArray = res
    })
  }




}
