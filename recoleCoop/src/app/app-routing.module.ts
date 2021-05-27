import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PickupRejectedComponent } from './pages/pickup-rejected/pickup-rejected.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

import { MaterialesComponent } from './pages/materiales/materiales.component';
import { DetallematerialesComponent } from './components/detallemateriales/detallemateriales.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { EntregamaterialesComponent } from './components/entregamateriales/entregamateriales.component';

const routes: Routes = [
  { path: 'home', component: MaterialesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'pedido-rechazado', component: PickupRejectedComponent},
  { path: 'en-construccion', component: UnderConstructionComponent},
  { path: 'detallemateriales', component: DetallematerialesComponent},
  { path: 'entregamateriales', component: EntregamaterialesComponent},
  { path: 'pedido-form', component: PedidoFormComponent},
  { path: '', redirectTo: 'en-construccion', pathMatch: 'full'},
  //{ path: '**', redirectTo: 'en-construccion', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
