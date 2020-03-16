import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  title = 'DemoBergamo';

  htmlString = '<div><p>Prova</p></div>';
  linkUrl = 'https://google.it';
  
  @Input()
  titoloInput: string;

  lista = [1, 2];

  myDate: Date = new Date();

  oggetto: {chiave: string};
  oggetto1: {chiave: string} = {
    chiave:  'valore'
  };

  constructor() { 
  }

  ngOnInit(): void {
  }

}
