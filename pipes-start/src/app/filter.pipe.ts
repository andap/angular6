import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //!!!! not recomanded because it can cause performance problems
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propertyName: string): any {
    if (value.length === 0 || filterStr === '') {
      return value;
    }
    let filteredValues = [];
     for (let item of value) {
       if (item[propertyName] === filterStr) {
         filteredValues.push(item);
       }
     }
    return filteredValues;
  }

}
