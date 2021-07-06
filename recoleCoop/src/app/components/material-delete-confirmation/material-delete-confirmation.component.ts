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
import { MaterialDataService } from 'src/app/services/materialData/material-data.service';

@Component({
  selector: 'app-material-delete-confirmation',
  templateUrl: './material-delete-confirmation.component.html',
  styleUrls: ['./material-delete-confirmation.component.scss']
})
export class MaterialDeleteConfirmationComponent implements OnInit {

  selectedMaterial: Material = new Material;

  constructor(private service: MaterialesService, private dialogRefDe: MatDialogRef < MaterialDeleteConfirmationComponent >,
    private materialDataService: MaterialDataService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.selectedMaterial=this.materialDataService.material;
  }


  deleteMaterial(): void {
    this.service.deleteMaterial(this.selectedMaterial.id_material!)
      .subscribe(
        response => {
          console.log(response);
          this.onNoClick();
          this.openSnackBar(this.selectedMaterial.name!);
        },
        error => {
          console.log(error);
        });
  }

  onNoClick(): void {
    this.dialogRefDe.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, " ha sido borrado");
  }

}
