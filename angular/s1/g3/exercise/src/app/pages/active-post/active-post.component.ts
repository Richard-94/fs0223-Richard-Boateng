import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Models/post';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent {



   post:any[] = []

   @Input() posts!: Post[];

   disactivate(post: Post) {

  }

   constructor (private postService: PostService){
    this.postService.getPost()
    .then(posts => this.post = posts)
    .catch(error => console.error('Error fetching posts:', error));
   }



}
