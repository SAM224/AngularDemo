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
