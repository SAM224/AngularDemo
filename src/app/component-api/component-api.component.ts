import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css']
})
export class ComponentApiComponent implements OnInit {
  @Input('isMuted') is_Muted: boolean;
  @Output() change =new EventEmitter();
    constructor() { }
  
    onToggle(){
      this.is_Muted = !this.is_Muted;
      this.change.emit();
    }
  ngOnInit() {
  }

}
