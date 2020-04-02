import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  powers: string[] = ['Super velocità', 'Super forza', 'Indistruttibilità'];

  heroForm: FormGroup
  heroList: { name: string, power: string }[] = [];

  get nameControl(): FormControl{
    return this.heroForm.get('name') as FormControl;
  }
  
  get powerControl(): FormControl{
    return this.heroForm.get('power') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      power: ['', Validators.required],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ['', Validators.compose([Validators.minLength(5),Validators.maxLength(5)])]
      })
    });
  }

  setDefault() {
    // in questo caso uso il patchValue, perché il setValue mi obbligherebbe ad inserire tutti i campi
    // this.heroForm.setValue({
    //   name: 'Goku'
    // });
    // this.heroForm.patchValue({
    //   name: 'Goku'
    // });
    // in questo caso non c'è una reale differenza tra set e pathc Value
    // this.nameControl.setValue('Goku');
    this.nameControl.patchValue('Goku');
  }

  ngOnInit(): void {
  }

  addHero(){
    this.heroList.push({
      name: this.nameControl.value,
      power: this.powerControl.value
    });
    this.clearHero();
  }

  clearHero(){
    this.heroForm.reset({
      name: 'Gohan'
    });
  }

}
