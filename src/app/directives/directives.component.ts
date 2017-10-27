import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
courses = [
  {id: 1, name: 'course1 '},
  {id: 2, name: 'course2 '},
  {id: 3, name: 'course3 '}
];
viewMode = 'somethinElse';
  constructor() { }

  ngOnInit() {
  }

}
