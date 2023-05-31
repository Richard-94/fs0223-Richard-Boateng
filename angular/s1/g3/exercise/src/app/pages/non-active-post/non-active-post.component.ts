import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-non-active-post',
  templateUrl: './non-active-post.component.html',
  styleUrls: ['./non-active-post.component.scss']
})
export class NonActivePostComponent implements OnInit {
  post:Post[] = [
    { title: 'Post 1', body: 'Lorem ipsum...', active: false },
    { title: 'Post 2', body: 'Dolor sit amet...', active: false },
  ]


  @Input() posts!:Post[];


  @Output() onDelete = new EventEmitter<Post>();


  ngOnInit() {
    console.log(this.posts)
    this.post = this.posts;
  }

  delete(post: Post) {
    this.onDelete.emit(post);
  }

  constructor (private postService: PostService){
   this.postService.getPost()
   .then(posts => this.post = posts)
   .catch(error => console.error('Error fetching posts:', error));
  }
}
