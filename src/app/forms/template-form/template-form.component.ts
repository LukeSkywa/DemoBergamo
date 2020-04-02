import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  powers: string[] = ['Super velocità', 'Super forza', 'Indistruttibilità']
  constructor() { }

  heroList: { name: string, power: string }[] = [];

  model: { name: string, power: string } = {
    name: '',
    power: ''
  };
  ngOnInit(): void {
  }

  aggiungiEroe() {
    this.heroList.push({
      name: this.model.name,
      power: this.model.power
    });
  }

}
