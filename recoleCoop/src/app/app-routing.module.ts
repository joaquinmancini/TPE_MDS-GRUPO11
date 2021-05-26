import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PickupRejectedComponent } from './pages/pickup-rejected/pickup-rejected.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'pedido-rechazado', component: PickupRejectedComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
