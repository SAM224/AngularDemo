import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css']
})
export class ComponentApiComponent implements OnInit {
  @Input() isMuted: boolean;
  
    constructor() { }
  
    onToggle = () => this.isMuted = !this.isMuted;
  
  ngOnInit() {
  }

}
