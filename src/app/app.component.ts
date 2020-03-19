import { Component, ViewChild } from '@angular/core';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { PrimoComponent } from './primo/primo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(CiclovitaComponent)
  private ciclovitaComponentRef: CiclovitaComponent;

  @ViewChild('primoComponent')
  private primoComponentRef: PrimoComponent;

  componentToShow: number = 1;

  title = 'Titolo';

  clickAppComponent(value: string) {
    console.log('cliccato da secondo in app: ' + value);
  }

  showComponent(){
    const refDiProva = new CiclovitaComponent(); // codice assolutamente sbagliato e sa non fare
    console.log('ciclovita di prova titolo: '+ refDiProva.title);
    // qui in basso riferimento corretto al componente ciclovita contenuto in app component
    console.log('ciclovita titolo: '+ this.ciclovitaComponentRef.title);
    if(this.componentToShow === 3){
      this.componentToShow = 1;
    }else{
      this.componentToShow++;
    }
    if(this.primoComponentRef != null){
      console.log('il primo componente selezionato è visualizzato');
    }else{
      console.log('il primo componente selezionato NON è visualizzato');
    }
  }
}
