import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentApiComponent implements OnInit {
  @Input('isMuted') is_Muted: boolean;
  @Output('change') click =new EventEmitter();
    constructor() { }
  
    onToggle(){
      this.is_Muted = !this.is_Muted;
      this.click.emit({newValue: this.is_Muted});
    }
  ngOnInit() {
  }

}
