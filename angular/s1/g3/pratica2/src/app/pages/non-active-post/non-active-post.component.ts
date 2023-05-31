import { Component,  OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-non-active-post',
  templateUrl: './non-active-post.component.html',
  styleUrls: ['./non-active-post.component.scss']
})
export class NonActivePostComponent implements OnInit {

  postArray:Post[] = []

  constructor(private postSequence:PostService){}

  ngOnInit(): void {

      this.postArray = this.postSequence.showActivePost(false);

  }

  toggleStatus(post: Post): void {
    this.postSequence.toggleStatus(post);
    this.postArray = this.postSequence.showActivePost(false);
  }




}
