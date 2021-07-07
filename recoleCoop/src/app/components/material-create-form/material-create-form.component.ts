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
  selector: 'app-material-create-form',
  templateUrl: './material-create-form.component.html',
  styleUrls: ['./material-create-form.component.scss']
})
export class MaterialCreateFormComponent implements OnInit {

  formInstance: FormGroup;

  constructor(private dialogRef: MatDialogRef < MaterialCreateFormComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Material) {
    this.formInstance = new FormGroup({
      "id_material": new FormControl('', Validators.required),
      "name": new FormControl('', Validators.required),
      "description": new FormControl('', Validators.required),
      "imgBase64": new FormControl(''),
      "weight": new FormControl(''),
    });
  }

  ngOnInit(): void {}

  saveMaterial(): void {
    this.dialogRef.close(Object.assign(new Material(), this.formInstance.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
