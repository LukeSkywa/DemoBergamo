import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
  }]
})
export class RatingComponent implements OnInit, ControlValueAccessor {

  onChange: any = ()=>{};
  onTouch: any = ()=>{};

  value: number;

  constructor() { }

  writeValue(obj: number): void {
    this.value=obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectRate(item: number){
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }

}
