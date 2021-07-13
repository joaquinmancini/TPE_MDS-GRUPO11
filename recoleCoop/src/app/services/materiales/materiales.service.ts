import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Material } from 'src/app/models/material/material.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MaterialesService {
  url: string = "http://localhost:8080/api/material";
  get_materiales:string = "/getMaterials";
  get_material_by_id:string = "/getMaterialById/?id_material=";
  create_material:string = "/saveMaterial";
  update_material:String = "/updateMaterial";
  delete_material:string = "/deleteMaterial/?id_material=";


  constructor(public http: HttpClient) { }



  getMateriales(): Observable<Material[]>{
    return this.http.get<Material[]>(this.url+this.get_materiales)
  }

  getMaterialById(id_material:number): Observable<Material> {
    return this.http.get<Material>(this.url+this.get_material_by_id+id_material);
  }

  createMaterial(data:any): Observable<any> {
    return this.http.post(this.url+this.create_material, data);
  }

  updateMaterial(data:any): Observable<any> {
    return this.http.post(this.url+this.update_material, data);
  }

  deleteMaterial(id_material:number): Observable<any> {
    return this.http.post(this.url+this.delete_material+id_material, null);
  }

}
