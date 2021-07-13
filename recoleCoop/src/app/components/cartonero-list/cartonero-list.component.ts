import {
  Component,
  OnInit
} from '@angular/core';
import {
  Cartonero
} from 'src/app/models/cartonero/cartonero.model';
import CartonerosData from 'src/app/components/cartonero-list/cartoneros.json';
import {
  CartoneroService
} from 'src/app/services/cartonero/cartonero.service';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  CartoneroCreateFormComponent
} from '../cartonero-create-form/cartonero-create-form.component';
import { CartoneroUpdateFormComponent } from '../cartonero-update-form/cartonero-update-form.component';

@Component({
  selector: 'app-cartonero-list',
  templateUrl: './cartonero-list.component.html',
  styleUrls: ['./cartonero-list.component.scss']
})
export class CartoneroListComponent implements OnInit {

  public cartoneros: Cartonero[];
  public selectedCartonero: Cartonero;
  constructor(private _cartonero: CartoneroService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) {
    this.cartoneros = [];
    this.selectedCartonero = new Cartonero();
  }

  ngOnInit(): void {
    this._cartonero.getCartoneros()
      .subscribe(data => this.cartoneros = data.sort((a, b) => a.id!-b.id!));
  }

  chooseCartonero(cartonero: Cartonero) {
    this.selectedCartonero = cartonero;
  }

  //Acciones
  //Creation of cartoneros
  create() {
    const dialogRef = this.dialog.open(CartoneroCreateFormComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._cartonero.createCartonero(result)
          .subscribe(
            response => {
              dialogRef.close();
              this._snackBar.open(result.name!, " añadido exitosamente", {
                duration: 2000
              });
            },
            error => {
              console.log(error);
            });
        this.cartoneros.push(result);
      }
    });
  }

  edit(cartonero: Cartonero) {
    const dialogRef = this.dialog.open(CartoneroUpdateFormComponent, {
      data: cartonero,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._cartonero.updateCartonero(result)
          .subscribe(
            response => {
              dialogRef.close();
              this._snackBar.open(result.name!, " ha sido actualizado", {
                duration: 2000
              });
            },
            error => {
              console.log(error);
            });
        this.updateCartoneroInList(result);
      }
    });
  }

  updateCartoneroInList(cartonero: Cartonero) {
    const matIndex = this.cartoneros.findIndex(element => element.id == cartonero.id);
    let newCartoneros = [...this.cartoneros];
    newCartoneros[matIndex] = cartonero;
    this.cartoneros = newCartoneros;
    this.selectedCartonero = cartonero;
  }

  delete(id: number, name: String) {}

}
