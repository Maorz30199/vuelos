import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FiltrocedulaPipe } from './_pipes/filtrocedula.pipe';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vuelos';


  busqueda= '';

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
