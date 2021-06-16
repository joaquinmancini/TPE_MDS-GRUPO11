import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { Pedido } from 'src/app/models/pedido/pedido.module';


@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  public pedidos:Pedido[];
  constructor(private _pedido:PedidoService) {
    this.pedidos = [];
   }

  ngOnInit(): void {
    this._pedido.getPedidos()
      .subscribe(data => this.pedidos = data
    );
  }

}
