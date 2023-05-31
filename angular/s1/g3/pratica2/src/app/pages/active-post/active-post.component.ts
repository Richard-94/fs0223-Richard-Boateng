import { Component,OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {



   postArray:Post[] = []

   constructor(private postSequence:PostService){}

   ngOnInit(): void {

       this.postArray = this.postSequence.showActivePost(true);

   }


  toggleStatus(post: Post): void {
    this.postSequence.toggleStatus(post);
    this.postArray = this.postSequence.showActivePost(true);
  }


}
