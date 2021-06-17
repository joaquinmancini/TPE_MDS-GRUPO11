import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Material
} from 'src/app/models/material/material.model';
import {
  MaterialesService
} from 'src/app/services/materiales/materiales.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Subscriber
} from 'rxjs';

@Component({
  selector: 'app-material-delete-confirmation',
  templateUrl: './material-delete-confirmation.component.html',
  styleUrls: ['./material-delete-confirmation.component.scss']
})
export class MaterialDeleteConfirmationComponent implements OnInit {

  selectedMaterial: Material = {
    id_material: 0,
    name: 'Some',
    description: '',
    imgBase64: '',
    weight: 0
  };

  message = '';

  constructor(private service: MaterialesService, private dialogRefDel: MatDialogRef < MaterialDeleteConfirmationComponent >, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {}


  deleteMaterial(): void {
    this.service.deleteMaterial(this.selectedMaterial.id_material!)
      .subscribe(
        response => {
          console.log(response);
          this.openSnackBar(this.selectedMaterial.name!);
        }
      )

  }

  onNoClick(): void {
    this.dialogRefDel.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, " ha sido borrado");
  }

}
