import {
  Component,
  OnInit
} from '@angular/core';
import {
  MaterialesService
} from 'src/app/services/materiales/materiales.service';
import {
  Material
} from 'src/app/models/material/material.model';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {
  MaterialCreateFormComponent
} from '../material-create-form/material-create-form.component';
import {
  MaterialDeleteConfirmationComponent
} from '../material-delete-confirmation/material-delete-confirmation.component';
import {
  MaterialDataService
} from 'src/app/services/materialData/material-data.service';
import {
  MaterialUpdateFormComponent
} from '../material-update-form/material-update-form/material-update-form.component';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-materials',
  templateUrl: './manage-materials.component.html',
  styleUrls: ['./manage-materials.component.scss']
})
export class ManageMaterialsComponent implements OnInit {


  public materiales: Material[];

  constructor(private _material: MaterialesService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) {
    this.materiales = [];
  }


  ngOnInit(): void {
    this._material.getMateriales()
      .subscribe(data => this.materiales = data.sort((a, b) => a.id_material!-b.id_material!));
  }


  //Acciones
  //Creation of materials
  create() {
    const dialogRef = this.dialog.open(MaterialCreateFormComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._material.createMaterial(result)
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
        this.materiales.push(result);
      }
    });
  }

  //Edition of materials
  edit(mat: Material) {
    const dialogRef = this.dialog.open(MaterialUpdateFormComponent, {
      data: mat,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._material.updateMaterial(result)
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
        this.updateMaterialInList(result);
      }
    });
  }

  updateMaterialInList(mat: Material) {
    const matIndex = this.materiales.findIndex(element => element.id_material == mat.id_material);
    let newMateriales = [...this.materiales];
    newMateriales[matIndex] = mat;
    this.materiales = newMateriales;
  }

  //Deletion of materials
  delete(id_material: number, name: String) {
    const dialogRef = this.dialog.open(MaterialDeleteConfirmationComponent, {
      data: {
        id_material,
        name,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._material.deleteMaterial(result.id_material)
          .subscribe(
            response => {
              dialogRef.close();
              this._snackBar.open(result.name, " ha sido borrado", {
                duration: 2000
              });
            },
            error => {
              console.log(error);
            });
        this.deleteMaterialInList(result.id_material);
      }
    });
  }

  deleteMaterialInList(id_material: number) {
    const matIndex = this.materiales.findIndex(element => element.id_material == id_material);
    let newMateriales = [...this.materiales];
    newMateriales.splice(matIndex, 1);
    this.materiales = newMateriales;
  }

}
