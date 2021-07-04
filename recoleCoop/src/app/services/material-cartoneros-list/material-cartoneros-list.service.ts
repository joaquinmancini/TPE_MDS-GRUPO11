import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cartonero } from 'src/app/models/cartonero/cartonero.module';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MaterialCartonerosListService {

  url: string = "https://60c61a5519aa1e001769ed12.mockapi.io/api/cartonero";
  // pedidos:string = "/getPedidos";
  
  constructor(public http: HttpClient) { }

  getCartonerosMaterial(): Observable<Cartonero[]>{
    return this.http.get<Cartonero[]>(this.url)

  }
}

