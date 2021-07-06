import { Injectable } from '@angular/core';
import { Material } from 'src/app/models/material/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialDataService {
  material: Material = new Material;

  constructor() { }

  storeMaterial(material: Material){
    this.material=material;
  }
}
