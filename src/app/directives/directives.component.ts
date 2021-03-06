import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
courses = [];
viewMode = 'somethinElse';
  constructor() { }

  LoadCourses(){
    this.courses = [
      {id: 1, name: 'course1 '},
      {id: 2, name: 'course2 '},
      {id: 3, name: 'course3 '}
    ];
    
  };

  trackCourses= (index, course) => course ? course.id: undefined
  
  onAdd(lastIndex){
    
    this.courses.push({id: 4, name:'course4 '});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  ngOnInit() {
  }

}
