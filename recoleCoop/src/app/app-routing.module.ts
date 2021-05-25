import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'pedido-form', component: PedidoFormComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
