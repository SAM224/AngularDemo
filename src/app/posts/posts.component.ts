import { Error } from 'tslint/lib/error';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {

  }
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });

  }

 

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
    //this.http.put(this.url, JSON.stringify(post); // this is used for sending the whole object.
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {

        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

        console.log(response.json());
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }



}
