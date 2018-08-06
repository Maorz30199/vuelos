import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocedula'
})
export class FiltrocedulaPipe implements PipeTransform {


  transform(valor: number): any {
      let x:number = 0;
      let ar: Array<number> = [];
      while(x < valor){
        ar.push(x+1);
        x++;
      }

      return !ar;
    }

}
