import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido/pedido.module';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  public pedido: Pedido = {
    id: 0,
    solicitante:"",
    direccion: "",
    telefono: "",
    email: "",
    horario: "",
    volumen: "",
  }
  constructor(private _pedido:PedidoService) {
   }

  ngOnInit(): void {
  }

  displayimg (){
    let imagen = document.getElementById('img1');
    let botonelim = document.getElementById('eliminar');
    if (imagen != null && botonelim != null){
 
        imagen.style.display = "block";
        botonelim.style.display = "block";
    }
  }
  
  displaynoneimg(){
    let imagen = document.getElementById('img1');
    let botonelim = document.getElementById('eliminar');
    if (imagen != null && botonelim != null){
 
        imagen.style.display = "none";
        botonelim.style.display = "none";
    }
  }

  enviarPedido() {

      //this.pedido.id = ;
      this.pedido.solicitante = ((document.getElementById("solicitante") as HTMLInputElement).value);
      this.pedido.direccion = ((document.getElementById("direccion") as HTMLInputElement).value);
      this.pedido.telefono = ((document.getElementById("telefono") as HTMLInputElement).value);
      this.pedido.email = ((document.getElementById("email") as HTMLInputElement).value);
      this.pedido.horario = ((document.getElementById("horario") as HTMLInputElement).value);
      let checkbox = document.querySelector('input[name=checkboxes]:checked');
      if (checkbox != null) {
        this.pedido.volumen = checkbox.attributes.getNamedItem('value')?.value;

      }
    

    //var pedido = {};
    //formData.forEach((value, key) => pedido[key] = value);
    //var json = JSON.stringify(pedido);



    //ENVIAR a el servicio 
    this._pedido.savePedido(this.pedido);
    window.location.href="http://localhost:4200/pedidos-list";
  }
}