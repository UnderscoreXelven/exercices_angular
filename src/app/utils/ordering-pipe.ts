import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordering'
})
export class OrderingPipe implements PipeTransform {

  transform(value: string[], orderingType: string): string[] {
    if(orderingType === "ASC"){
      value.sort()
    } else if(orderingType === "DESC"){
      value.sort((a,b) => b.localeCompare(a))
    }
    return value;
  }
}
