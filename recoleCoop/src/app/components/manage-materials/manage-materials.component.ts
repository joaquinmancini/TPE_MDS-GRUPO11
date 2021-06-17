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

@Component({
  selector: 'app-manage-materials',
  templateUrl: './manage-materials.component.html',
  styleUrls: ['./manage-materials.component.scss']
})
export class ManageMaterialsComponent implements OnInit {


  public materiales: Material[];
  constructor(private _material: MaterialesService,
    private dialog: MatDialog,
    private dialogDel: MatDialog) {
    this.materiales = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MaterialCreateFormComponent, {});
    const dialogRefDel = this.dialogDel.open(MaterialDeleteConfirmationComponent, {});
  }

  ngOnInit(): void {
    this._material.getMateriales()
      .subscribe(data => this.materiales = data);
  }


  //Acciones
  onCreate() {
    this.dialog.open(MaterialCreateFormComponent);
  }

  onEdit() {

  }

  onDelete(id_material:number) {
    this.dialogDel.open(MaterialDeleteConfirmationComponent);
  }


}
