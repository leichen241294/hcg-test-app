import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice'
})
export class SlicePipe implements PipeTransform {
  transform(arr = [], start: number, end: number): Array<any> {
    return arr.slice(start, end);
  }

}
