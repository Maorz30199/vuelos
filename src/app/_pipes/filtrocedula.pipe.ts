import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocedula'
})
export class FiltrocedulaPipe implements PipeTransform {


  transform(items: any[], value: number): any {
    return items.filter(item => item.cedula.indexOf(value) >= 0);
  }
}
