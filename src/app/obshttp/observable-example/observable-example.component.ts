import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs$ = new Observable()

    from([1,2,3]);

    of('pippo', 'pluto', 'topolino').subscribe(value =>{
      console.log('next: '+value);
      // si gestisce il valore e il nuovo evento
    }, error=>{
      console.log('error: '+error);
      // qui gestisco quando l'observable va in errore
    }, ()=>{
      console.log('complete');
      // gestisco qui quando l'observable viene completato
    });
    console.log()
  }

}
