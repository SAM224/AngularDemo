import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  constructor() { }

  ngOnInit() {
  }

}
