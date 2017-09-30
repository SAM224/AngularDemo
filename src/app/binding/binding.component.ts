import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  name='Shady';
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2017,9,30)
  }
  
  constructor() { }

  onClick = ($event) => {
    $event.stopPropagation();
    console.log('button was clicked', $event);
  }
  
  onDivClick = ($event) => console.log('Div was clicked');
  
  onKeyUp = (email) => console.log(email);
  
  onKeyUp2 = () => console.log(this.name);

  ngOnInit() {
  }

}
