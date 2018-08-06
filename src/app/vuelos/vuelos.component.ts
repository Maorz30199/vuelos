import { Component, OnInit, Output, Input } from '@angular/core';
import {Vuelos} from './../_interfaces/vuelos.interface';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  vueloso: Vuelos[] = [];

  @Input('vuelos')
  vuelos: Vuelos;

  estatus: boolean= true;
  cedula: number= 15;
  @Output('onActivate')
  estado: boolean= false;


  constructor(private http:HttpClient) { }
  ngOnInit() {

    this.obtenerVuelos();


    //this.nombre= 'Florencia';
  }

  obtenerVuelos(){
    this.http.get('http://localhost:8080/api/vuelos')
      .subscribe((vueloso: Vuelos[])=> {
      console.log(this.vueloso)
      this.vueloso=vueloso;
    })
  }

  realizarReservas(){

  }

}
