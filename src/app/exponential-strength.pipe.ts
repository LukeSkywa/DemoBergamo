import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent: string = '2'): unknown {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
