import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { ComunicazioneService } from '../comunicazione.service';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {

  lista: string[] = ['stringa1', 'stringa2', 'stringa3'];


  toggleStyle: boolean = true;

  get myStyles() {
    return {
      colorRed: this.toggleStyle,
      boldStyle: !this.toggleStyle
    };
  }

  title = 'DemoBergamo';

  htmlString = '<div><p>Prova</p></div>';
  linkUrl = 'https://google.it';
  
  @Input('parametroInput')
  titoloInput: string;

  myDate: Date = new Date();

  oggetto: {chiave: string};
  oggetto1: {chiave: string} = {
    chiave:  'valore'
  };

  constructor(private comunicazioneService: ComunicazioneService) {
    this.comunicazioneService.messaggio$.subscribe(value=>{
      console.log('ecco il nuovo messaggio: '+value);
    }); 
  }

  ngOnInit(): void {
  }

}
