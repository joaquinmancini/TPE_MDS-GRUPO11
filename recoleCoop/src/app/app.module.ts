import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { PickupRejectedComponent } from './pages/pickup-rejected/pickup-rejected.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { DetallematerialesComponent } from './components/detallemateriales/detallemateriales.component';
import { EntregamaterialesComponent } from './components/entregamateriales/entregamateriales.component';
import { RetiroDeMaterialesComponent } from './components/retiro-de-materiales/retiro-de-materiales.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PedidoFormComponent,
    PickupRejectedComponent,
    UnderConstructionComponent,
    MaterialesComponent,
    DetallematerialesComponent,
    EntregamaterialesComponent,
    RetiroDeMaterialesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
