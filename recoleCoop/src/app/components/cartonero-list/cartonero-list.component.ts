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
    this.cartoneros = CartonerosData;
    this.selectedCartonero = this.cartoneros[0];
  }

  ngOnInit(): void {
    this.cartoneros.sort((a, b) => a.id_cartonero!-b.id_cartonero!)
  }

  selectCartonero(cartonero: Cartonero) {
    this.selectedCartonero = cartonero;
  }

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

  edit(cartonero: Cartonero) {}

  delete(id_cartonero: number, name: String) {}

}
