import { Component, OnInit, Input } from '@angular/core';
import {Vuelos} from './../_interfaces/vuelos.interface';
import {Reservas} from './../_interfaces/reservas.interface';
import * as VUELOS from './../../assets/data/vuelos.json';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  //vueloso: Vuelos[] = [];
  //vuelos: Vuelos = {
  //  ciudad: "Cali",
  /*  precio: 35
  }


  @Input()
  cedula: number= 12;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //this.vueloso = VUELOS as any;
    //console.log(this.vueloso);
    this.obtenerVuelos();
  }

  agregarVuelos() {
    let vuelos = 'Sergio';
    vuelos = 'Iván';

    this.vuelos.ciudad = vuelos;
  }

  obtenerVuelos(){
    this.http.get('http://localhost:8080/api/vuelos')
      .subscribe((vueloso: Vuelos[])=> {
      console.log(this.vueloso)
      this.vueloso=vueloso;
    })
  }*/

  constructor(private http:HttpClient) { }

  reservass: Reservas[] = [];

  @Input('reservas')
  reservas: Reservas;
  ngOnInit(){
    this.obtenerReservas();
  }

  obtenerReservas(){
    this.http.get('http://localhost:8080/api/reservas')
      .subscribe((reservass: Reservas[])=> {
      console.log(this.reservass)
      this.reservass=reservass;
    })
  }
}
