import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formreserva',
  templateUrl: './formreserva.component.html',
  styleUrls: ['./formreserva.component.scss']
})
export class FormreservaComponent implements OnInit {

  constructor(private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

reserva: any;
public ciudad: string;
public precio: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
   if(params['precio']!=null){
       this.precio = +params['precio'];
   }
   if(params['ciudad']!=null){
       this.ciudad = params['ciudad'];
   }
});
    this.reserva = {};
  }
  crearReserva(){
    var parametros = {
      nombre: this.reserva.nombre,
      cedula: this.reserva.cedula,
      edad: this.reserva.edad,
      dia_reserva: this.reserva.dia_reserva,
      ciudad: this.ciudad,
      precio: this.precio
    };
    this.http.post('http://localhost:8080/api/reservas', parametros)
      .subscribe((reserva: Response)=> {
      console.log(this.reserva)
      this.reserva=reserva;
    })
  }
}
