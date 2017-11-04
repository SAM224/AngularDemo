import { BadInput } from '../bad-input';
import { NotFoundError } from '../not-found-error';
import { AppError } from '../app-errors';
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
    this.service.getAll()
      .subscribe(
      response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          //this.form.serErrors(error.json());  
        }
        else throw error;
      });

  }

  updatePost(post) {
    this.service.udpate(post)
      .subscribe(
      response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response.json());
      }
      ,
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post is already been deleted.');
        else throw error;
      }
      );
  }
}
