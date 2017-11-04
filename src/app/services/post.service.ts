import { BadInput } from '../bad-input';
import { NotFoundError } from '../not-found-error';
import { AppError } from '../app-errors';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts = () => this.http
    .get(this.url)
    .catch(this.handleError);

  createPost = (post) => this.http
    .post(this.url, JSON.stringify(post))
    .catch(this.handleError);


  updatePost = (post) => this.http
    .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .catch(this.handleError);

  deletePost = (id) => this.http
    .delete(this.url + '/' + id)
    .catch(this.handleError);


  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error));

    if (error.status === 404)
      return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }
}
