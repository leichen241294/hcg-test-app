import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(input: string): string {
    if (!input && input.length === 0) return input

    let output = '';
    let nameArr = input.split('-');

    if (nameArr.length === 1) {
      output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    } else {
      nameArr = nameArr.map((e: any) => {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
      });

      output = nameArr.join(' ');
    }

    return output
  }
}
