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
nuevoprecio: number;
horario: string= '';
viajes: string[] = ["Tarde", "Mañana", "Fin de Semana"];
dia = '';
  ngOnInit() {
    //Obteniendo los datos enviados desde el componente vuelos
    this.route.params.subscribe(params => {
   if(params['precio']!=null){
       this.precio = +params['precio'];
   }
   if(params['ciudad']!=null){
       this.ciudad = params['ciudad'];
   }
  });
    this.obtenerPrecio();
    this.reserva = {};
    console.log(this.dia)
    console.log(this.horario)
  }
  obtenerPrecio(){
    console.log(this.horario)
    if(this.horario === "Mañana"){
      console.log(this.nuevoprecio)
          console.log(this.horario)
      return this.nuevoprecio = this.precio*1.2
    }
    else if(this.horario === "Fin de Semana"){
      console.log(this.nuevoprecio)
      console.log(this.horario)
      return this.nuevoprecio = this.precio*1.5
    }
    else{
      console.log(this.nuevoprecio)
      console.log(this.horario)
      return this.nuevoprecio = this.precio
    }
  }
  crearReserva(){
    var parametros = {
      nombre: this.reserva.nombre,
      cedula: this.reserva.cedula,
      edad: this.reserva.edad,
      dia_reserva: this.reserva.dia_reserva,
      ciudad: this.ciudad,
      precio: this.nuevoprecio
    };
    //Se envía el formulario de la reserva realizada, a través del metodo POST
    this.http.post('http://localhost:8080/api/reservas', parametros)
      .subscribe((reserva: Response)=> {
      console.log(this.reserva)
      this.reserva=reserva;
    })
  }
}
