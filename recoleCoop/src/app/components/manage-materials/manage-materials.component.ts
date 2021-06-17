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
  MatDialogRef
} from "@angular/material/dialog";
import {
  MaterialCreateFormComponent
} from '../material-create-form/material-create-form.component';

@Component({
  selector: 'app-manage-materials',
  templateUrl: './manage-materials.component.html',
  styleUrls: ['./manage-materials.component.scss']
})
export class ManageMaterialsComponent implements OnInit {

  public materiales: Material[];
  constructor(private _material: MaterialesService, 
    private dialog: MatDialog) {
    this.materiales = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MaterialCreateFormComponent, {});
  }

  ngOnInit(): void {
    this._material.getMateriales()
      .subscribe(data => this.materiales = data);
  }

  onCreate() {
    this.dialog.open(MaterialCreateFormComponent);
  }

  onEdit() {
    
  }

  onDelete() {

  }

  onSubmit(){
    
  }



}
