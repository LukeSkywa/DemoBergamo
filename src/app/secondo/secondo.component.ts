import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComunicazioneService } from '../comunicazione.service';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  testo: string = 'Iniziale';

  @Output('clickPulsante')
  myClick: EventEmitter<string> = new EventEmitter();

  constructor(private comunicazioneService: ComunicazioneService) { 
    
  }

  ngOnInit(): void {
  }

  clickEvent(ev: MouseEvent, param: number){
    if(param === 2){
      this.myClick.emit(this.testo);
      this.testo = 'Default';
    }
    console.log('ho cliccato il pulsante: '+param);
    ev.stopPropagation();
  }

  inputEvent(ev){
    this.testo = ev.target.value;
  }

  clickNew(value: string){
    console.log(value);
    this.comunicazioneService.pubblicaNuovoMessaggio(this.testo);
  }

}
