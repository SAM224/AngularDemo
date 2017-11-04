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
      .subscribe(posts => this.posts = posts.json());
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
      newPost => {
        post['id'] = newPost.id;
        this.posts.splice(0, 0, post);
        console.log(newPost.json());
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
      .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
   (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post is already been deleted.');
        else throw error;
      }
      );
  }
}
