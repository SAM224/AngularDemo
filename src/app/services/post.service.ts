import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts = () => this.http.get(this.url);

  createPost = (post) => this.http.post(this.url, JSON.stringify(post));

  updatePost = (post) => this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));

  deletePost = (post) =>  this.http.delete(this.url + '/' + post.id);
  
}
