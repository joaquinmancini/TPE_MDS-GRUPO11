import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Cartonero } from "src/app/models/cartonero/cartonero.model";
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-cartonero-delete-confirmation',
  templateUrl: './cartonero-delete-confirmation.component.html',
  styleUrls: ['./cartonero-delete-confirmation.component.scss']
})
export class CartoneroDeleteConfirmationComponent implements OnInit {

  selectedCartonero: Cartonero;

  constructor(private dialogRef: MatDialogRef < CartoneroDeleteConfirmationComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Cartonero) {
      this.selectedCartonero = data;
    }

  ngOnInit(): void {}


  deleteCartonero(): void {
    this.dialogRef.close(Object.assign(new Cartonero(), this.data));    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
