import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Material
} from 'src/app/models/material/material.model';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-material-update-form',
  templateUrl: './material-update-form.component.html',
  styleUrls: ['./material-update-form.component.scss']
})
export class MaterialUpdateFormComponent implements OnInit {

  formInstance: FormGroup;
  currentMaterial: Material;

  constructor(private dialogRef: MatDialogRef < MaterialUpdateFormComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Material) {
    this.formInstance = new FormGroup({
      "id_material": new FormControl('', Validators.required),
      "name": new FormControl('', Validators.required),
      "description": new FormControl(''),
      "imgBase64": new FormControl(''),
      "weight": new FormControl(''),
    });
    this.formInstance.setValue(data);
    this.currentMaterial = data;
  }

  ngOnInit(): void {}

  updateMaterial(): void {
    this.dialogRef.close(Object.assign(new Material(), this.formInstance.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
