import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-non-active-post',
  templateUrl: './non-active-post.component.html',
  styleUrls: ['./non-active-post.component.scss']
})
export class NonActivePostComponent{
  post:any[] = []



  constructor (private postService: PostService){
   this.postService.getPost()
   .then(posts => this.post = posts)
   .catch(error => console.error('Error fetching posts:', error));
  }


}
