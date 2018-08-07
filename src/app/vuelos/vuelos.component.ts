import { Component, OnInit } from '@angular/core';
import {Vuelos} from './../_interfaces/vuelos.interface';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  vuelos: Vuelos[] = [];

  constructor(private http:HttpClient) { }
  ngOnInit() {

    this.obtenerVuelos();

    //this.nombre= 'Florencia';
  }

  obtenerVuelos(){
    this.http.get('http://localhost:8080/api/vuelos')
      .subscribe((vuelos: Vuelos[])=> {
      //console.log(this.vuelos)
      this.vuelos=vuelos;
    })
  }

  realizarReservas(){

  }

}
