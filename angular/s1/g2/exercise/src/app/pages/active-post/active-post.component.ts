import { Component } from '@angular/core';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent {
   post:any[] = []

   constructor (private postService: PostService){
    this.postService.getPost()
    .then(posts => this.post = posts)
    .catch(error => console.error('Error fetching posts:', error));
   }

}
