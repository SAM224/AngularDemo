import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course}}
        </li>
    </ul>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses = ['Course1', 'Course2', 'Course3'];

    constructor() {
        let service = new CoursesService();
        this.courses = service.GetCourses();        
    }
    getTitle = () => this.title;
}