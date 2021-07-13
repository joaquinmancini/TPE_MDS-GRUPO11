import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cartonero } from 'src/app/models/cartonero/cartonero.model';
import { Observable } from 'rxjs';
import CartonerosData from 'src/app/components/cartonero-list/cartoneros.json';

@Injectable({
  providedIn: 'root'
})
export class CartoneroService {
  url: string = "http://localhost:8080/api/cartonero";
  get_cartoneros:string = "/getCartoneros";
  get_cartonero_by_id:string = "/getCartonerolById/?id=";
  create_cartonero:string = "/saveCartonero";
  update_cartonero:String = "/updateCartonero";
  delete_cartonero:string = "/deleteCartonero/?id=";

  constructor(public http: HttpClient) { }

  // getCartonero() {
  //   let cartonero = JSON.parse("localStorage.getItem('cartonero')");
  //   return cartonero;
  // }

  getCartoneros(): Observable<Cartonero[]>{
    return this.http.get<Cartonero[]>(this.url+this.get_cartoneros)
  }

  getCartoneroById(id:number): Observable<Cartonero> {
    return this.http.get<Cartonero>(this.url+this.get_cartonero_by_id+id);
  }

  createCartonero(data:any): Observable<any> {
    return this.http.post(this.url+this.create_cartonero, data);
  }

  updateCartonero(data:any): Observable<any> {
    return this.http.post(this.url+this.update_cartonero, data);
  }

  deleteCartonero(id:number): Observable<any> {
    return this.http.post(this.url+this.delete_cartonero+id, null);
  }

}
