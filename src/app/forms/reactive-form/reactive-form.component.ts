import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  powers: string[] = ['Super velocità', 'Super forza', 'Indistruttibilità'];

  heroForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      power: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  ngOnInit(): void {
  }

}
