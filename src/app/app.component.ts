import { IsoundOptionChangedEventArgs } from './component-api/Component-api.interface';

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
  viewMode = 'somethingElse';

  onSoundOptionChanged(eventArgs: IsoundOptionChangedEventArgs) {
    console.log('sound option changed:', eventArgs);
  }
}
