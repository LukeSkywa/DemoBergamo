import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  testo: string = 'Iniziale';
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(ev: MouseEvent, param: number){
    if(param === 2){
      this.testo = 'Default';
    }
    console.log('ho cliccato il pulsante: '+param);
    ev.stopPropagation();
  }

  inputEvent(ev){
    this.testo = ev.target.value;
  }

}
