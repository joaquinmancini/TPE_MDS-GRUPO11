import {
  Component,
  OnInit
} from '@angular/core';
import {
  Material
} from 'src/app/models/material/material.model';
import {
  MaterialesService
} from 'src/app/services/materiales/materiales.service';
import {
  MatDialogRef
} from '@angular/material/dialog';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-create-form.component.html',
  styleUrls: ['./material-create-form.component.scss']
})
export class MaterialCreateFormComponent implements OnInit {

  material: Material = {
    id_material: 0,
    name: '',
    description: '',
    imgBase64: '',
    weight: 0
  };
  submitted = false;


  constructor(private service: MaterialesService, private dialogRef: MatDialogRef < MaterialCreateFormComponent >, private _snackBar: MatSnackBar ) {}

  ngOnInit(): void {}

  saveMaterial(): void {
    const data = {
      id_material: this.material.id_material,
      name: this.material.name,
      description: this.material.description,
      imgBase64: this.material.imgBase64,
      weight: this.material.weight
    };

    this.service.createMaterial(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.dialogRef.close();
          this.openSnackBar(this.material.name!);
        },
        error => {
          console.log(error);
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, " ha sido añadido");
  }

}
