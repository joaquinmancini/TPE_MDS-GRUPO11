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
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-cartonero-update-form',
  templateUrl: './cartonero-update-form.component.html',
  styleUrls: ['./cartonero-update-form.component.scss']
})
export class CartoneroUpdateFormComponent implements OnInit {

  formInstance: FormGroup;

  constructor(private dialogRef: MatDialogRef < CartoneroUpdateFormComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Cartonero) {
      this.formInstance = new FormGroup({
        "id": new FormControl('', Validators.required),
        "name": new FormControl('', Validators.required),
        "lastname": new FormControl('', Validators.required),
        "address": new FormControl('', Validators.required),
        "transportLoad": new FormControl('', Validators.required),
        "materialList": new FormControl(''),
      });
      this.formInstance.setValue(data);
    }

  ngOnInit(): void {}

  updateCartonero(): void {
    this.dialogRef.close(Object.assign(new Cartonero(), this.formInstance.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
