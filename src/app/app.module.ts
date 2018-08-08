import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,
         CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
// Modulo http me permite utilizar los metodos GET y POST
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,
         ReactiveFormsModule
}   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos de angular material
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        MatSidenavModule,
        MatRadioModule,
        MatSelectModule
} from '@angular/material';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormreservaComponent } from './formreserva/formreserva.component';
import { FiltrocedulaPipe } from './_pipes/filtrocedula.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VuelosComponent,
    ReservasComponent,
    FormreservaComponent,
    FiltrocedulaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
