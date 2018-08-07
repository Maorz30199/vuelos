import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormreservaComponent } from './formreserva/formreserva.component';

const routes: Routes = [
  { path: 'vuelos', component: VuelosComponent},
  { path: 'consulta-reserva/:busqueda', component: ReservasComponent},
  { path: 'reserva/:ciudad/:precio', component: FormreservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
