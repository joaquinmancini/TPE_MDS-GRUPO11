import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { MaterialesComponent } from './pages/materiales/materiales.component';
import { DetallematerialesComponent } from './components/detallemateriales/detallemateriales.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'materiales', component: MaterialesComponent},
  { path: 'detallemateriales', component: DetallematerialesComponent},
  { path: 'pedido-form', component: PedidoFormComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
