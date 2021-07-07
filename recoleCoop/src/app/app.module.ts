import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

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
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { ManageMaterialsComponent } from './components/manage-materials/manage-materials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCreateFormComponent } from './components/material-create-form/material-create-form.component';
import { MaterialesService } from './services/materiales/materiales.service';
import { MaterialDeleteConfirmationComponent } from './components/material-delete-confirmation/material-delete-confirmation.component';
import { MaterialUpdateFormComponent } from './components/material-update-form/material-update-form/material-update-form.component';


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
    PedidoListComponent,
    ManageMaterialsComponent,
    MaterialCreateFormComponent,
    MaterialDeleteConfirmationComponent,
    MaterialUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [MaterialesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faFilm);
  }
 }
