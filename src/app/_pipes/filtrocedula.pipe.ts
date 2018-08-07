import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocedula'
})
export class FiltrocedulaPipe implements PipeTransform {


  transform(items: any[], value: number): any {
    //Este filtro permite a la aplicación encontrar la reserva a través de la cédula
    return items.filter(item => item.cedula.indexOf(value) >= 0);
  }
}
