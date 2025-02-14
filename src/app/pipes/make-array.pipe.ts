import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeArray',
})
export class MakeArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    return Array.from({ length: value }, (_, i) => i + 1);
  }
}
