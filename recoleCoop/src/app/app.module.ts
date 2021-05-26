import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { DetallematerialesComponent } from './components/detallemateriales/detallemateriales.component';
import { EntregamaterialesComponent } from './components/entregamateriales/entregamateriales.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedidoFormComponent,
    MaterialesComponent,
    DetallematerialesComponent,
    EntregamaterialesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
