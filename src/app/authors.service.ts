import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }
  GetAuthorsCount = () => 3;
  GetAutothors = () => ['Author1', 'Author2', 'Author3'];
}
