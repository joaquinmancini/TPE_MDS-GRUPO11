import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PickupRejectedComponent } from './pages/pickup-rejected/pickup-rejected.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { DetallematerialesComponent } from './components/detallemateriales/detallemateriales.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { EntregamaterialesComponent } from './components/entregamateriales/entregamateriales.component';
import { RetiroDeMaterialesComponent } from './components/retiro-de-materiales/retiro-de-materiales.component';
import { PedidoListComponent  } from './components/pedido-list/pedido-list.component';
import {ManageMaterialsComponent} from "./components/manage-materials/manage-materials.component";

const routes: Routes = [
  { path: '', component: MaterialesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'pedido-rechazado', component: PickupRejectedComponent},
  { path: 'pedidos-list', component: PedidoListComponent},
  { path: 'en-construccion', component: UnderConstructionComponent},
  { path: 'detallemateriales', component: DetallematerialesComponent},
  { path: 'entregamateriales', component: EntregamaterialesComponent},
  { path: 'pedido-form', component: PedidoFormComponent},
  { path: 'retiro-material-exitoso', component: RetiroDeMaterialesComponent},
  { path: 'gestion-materiales', component: ManageMaterialsComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', redirectTo: 'en-construccion', pathMatch: 'full'},
  { path: '**', redirectTo: 'en-construccion', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

