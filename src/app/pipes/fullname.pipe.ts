import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: string): string {
    const names:string[] = value.split(' ');

    if(names.length >= 4) return `${names[0]} ${names[2]}`;

    if(names.length == 3) return `${names[0]} ${names[2]}`;

    if(names.length == 2) return `${names[0]} ${names[1]}`;


    return names[0];
  }

}
