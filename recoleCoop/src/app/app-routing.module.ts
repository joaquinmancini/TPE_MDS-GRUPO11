import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PickupRejectedComponent } from './pages/pickup-rejected/pickup-rejected.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'pedido-rechazado', component: PickupRejectedComponent},
  { path: 'en-construccion', component: UnderConstructionComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
