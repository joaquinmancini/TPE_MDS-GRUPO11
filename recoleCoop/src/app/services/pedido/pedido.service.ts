import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Pedido } from 'src/app/models/pedido/pedido.module';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  url: string = "http://localhost:8080/api/pedido";
  pedidos:string = "/getPedidos";
  
  constructor(public http: HttpClient) { }

  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url+this.pedidos)
  }

  savePedido(pedido : Pedido) {
    let json = JSON.stringify(pedido);
    let params = "pedido="+json;
    //const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(this.url + "/savePedido", json, {headers: headers}).subscribe(data => {
      //window.location.href="http://localhost:4200/retiro-material-exitoso"
    
    })
  }

}

