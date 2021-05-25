import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'materiales', component: MaterialesComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
