import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'my demo app',
    isMuted: true
  }

  onSoundOptionChanged($event) {
    console.log('sound option changed:', $event);
  }
}
