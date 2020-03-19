import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclovita',
  templateUrl: './ciclovita.component.html',
  styleUrls: ['./ciclovita.component.scss']
})
export class CiclovitaComponent implements OnInit {
  title: string = 'Titolo';
  constructor() { }

  ngOnInit(): void {
  }

  prendiTitolo(): string{
    return this.title;
  }

}
