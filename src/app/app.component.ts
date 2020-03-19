import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Titolo';

  clickAppComponent(value: string) {
    console.log('cliccato da secondo in app: ' + value);
  }
}
