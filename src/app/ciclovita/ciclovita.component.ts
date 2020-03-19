import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclovita',
  templateUrl: './ciclovita.component.html',
  styleUrls: ['./ciclovita.component.scss']
})
export class CiclovitaComponent implements OnInit, OnDestroy {
  title: string = 'Titolo';

  constructor() { 
    console.log('ngOnInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
