import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { PickupRejectedComponent } from './pages/pickup-rejected/pickup-rejected.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedidoFormComponent,
    PickupRejectedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
