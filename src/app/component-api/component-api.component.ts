import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css'],
  inputs: ['isMuted']
})
export class ComponentApiComponent implements OnInit {
    isMuted: boolean;
  
    constructor() { }
  
    onToggle = () => this.isMuted = !this.isMuted;
  
  ngOnInit() {
  }

}
