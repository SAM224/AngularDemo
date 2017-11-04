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
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
      newPost => {
        post['id'] = newPost.id;

        console.log(newPost);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
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
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError)
          alert('This post is already been deleted.');
        else throw error;
      }
      );
  }
}
