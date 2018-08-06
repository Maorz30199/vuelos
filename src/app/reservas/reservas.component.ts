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



  constructor(private http:HttpClient) { }

  reservass: Reservas[] = [];

  @Input('reservas')
  reservas: Reservas;

  actualizacion = new Date();
  busqueda= '';

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
