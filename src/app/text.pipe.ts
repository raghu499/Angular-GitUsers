import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {
  transformedName: any;

  transform(value: any): any {
 value.forEach(element => {
  element.name = element.name.toLowerCase();
  element["fage"]= (element.age > 40 )? 'NE' : 'E';
   
 });
   console.log(value);
    return value;
  }

}
