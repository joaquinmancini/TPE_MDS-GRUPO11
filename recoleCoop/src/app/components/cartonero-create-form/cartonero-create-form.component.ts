import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Cartonero
} from "src/app/models/cartonero/cartonero.model";
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
  selector: 'app-cartonero-create-form',
  templateUrl: './cartonero-create-form.component.html',
  styleUrls: ['./cartonero-create-form.component.scss']
})
export class CartoneroCreateFormComponent implements OnInit {

  formInstance: FormGroup;

  constructor(private dialogRef: MatDialogRef < CartoneroCreateFormComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Cartonero) {
      this.formInstance = new FormGroup({
        "name": new FormControl('', Validators.required),
        "lastname": new FormControl('', Validators.required),
        "address": new FormControl('', Validators.required),
        "transportLoad": new FormControl('', Validators.required),
      });
    }

  ngOnInit(): void {}

  saveCartonero(): void {
    this.dialogRef.close(Object.assign(new Cartonero(), this.formInstance.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
