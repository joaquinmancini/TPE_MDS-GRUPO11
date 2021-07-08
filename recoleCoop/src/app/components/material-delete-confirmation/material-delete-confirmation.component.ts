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

@Component({
  selector: 'app-material-delete-confirmation',
  templateUrl: './material-delete-confirmation.component.html',
  styleUrls: ['./material-delete-confirmation.component.scss']
})
export class MaterialDeleteConfirmationComponent implements OnInit {

  currentMaterial: Material;

  constructor(private dialogRef: MatDialogRef < MaterialDeleteConfirmationComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Material) {
      this.currentMaterial = data;
    }

  ngOnInit(): void {}


  deleteMaterial(): void {
    this.dialogRef.close(Object.assign(new Material(), this.data));    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
