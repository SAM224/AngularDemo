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

  onSoundOptionChanged(eventArgs) {
    console.log('sound option changed:', eventArgs);
  }
}
