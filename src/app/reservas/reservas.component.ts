import { Component, OnInit, Input } from '@angular/core';
import {Vuelos} from './../_interfaces/vuelos.interface';
import {Reservas} from './../_interfaces/reservas.interface';
import * as VUELOS from './../../assets/data/vuelos.json';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  public busqueda: number;

  constructor(private http:HttpClient,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  reservas: Reservas[] = [];

  // Se obtiene la actualizacion por medio de la función Date()
  actualizacion = new Date();

  ngOnInit(){
    this.route.params.subscribe(params => {
      if(params['busqueda']!=null){
        this.busqueda = +params['busqueda'];
      }
    });
    this.obtenerReservas();
  }

  obtenerReservas(){
    this.http.get('http://localhost:8080/api/reservas')
      .subscribe((reservas: Reservas[])=> {
      //console.log(this.reservas)
      this.reservas=reservas;
    })
  }
}
