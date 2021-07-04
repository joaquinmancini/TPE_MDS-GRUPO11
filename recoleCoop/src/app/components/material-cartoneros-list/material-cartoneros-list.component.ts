import { Component, OnInit } from '@angular/core';
import { MaterialCartonerosListService } from 'src/app/services/material-cartoneros-list/material-cartoneros-list.service';
import { Cartonero } from 'src/app/models/cartonero/cartonero.module';


@Component({
  selector: 'app-material-cartoneros-list',
  templateUrl: './material-cartoneros-list.component.html',
  styleUrls: ['./material-cartoneros-list.component.scss']
})
export class MaterialCartonerosListComponent implements OnInit {

  public cartoneros:Cartonero[];
  constructor(private _cartonero:MaterialCartonerosListService) {
    this.cartoneros = [];
   }

  ngOnInit(): void {
    this._cartonero.getCartonerosMaterial()
      .subscribe(data => this.cartoneros = data
    );
  }

}