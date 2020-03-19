import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  componentToShow: number = 1;

  title = 'Titolo';

  clickAppComponent(value: string) {
    console.log('cliccato da secondo in app: ' + value);
  }

  showComponent(){
    if(this.componentToShow === 3){
      this.componentToShow = 1;
    }else{
      this.componentToShow++;
    }
  }
}
