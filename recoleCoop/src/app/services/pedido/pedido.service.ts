import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pedido } from 'src/app/models/pedido/pedido.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  url: string = "https://60c61a5519aa1e001769ed12.mockapi.io/api/";
  pedidos:string = "getPedidos";
  
  constructor(public http: HttpClient) { }

  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url+this.pedidos)
  }
}
