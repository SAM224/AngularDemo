import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = 'Author(s)';
  authors;
  constructor(service :AuthorsService) { 
    this.title = service.GetAuthorsCount() + this.title;
    this.authors = service.GetAutothors();
  }

  GetTitle = () => this.title;
  ngOnInit() {
  }

}
