import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterspell'
})
export class LetterspellPipe implements PipeTransform {

  // converts the given given string into titlecase and replaces '_' with ' '
  transform(value: any, ...args: unknown[]): unknown {
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    value = value.replaceAll('_',' ');
    return value;
  }

}
