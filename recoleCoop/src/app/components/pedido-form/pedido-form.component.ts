import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayimg (){
    console.log("hola mundo");
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
    window.location.href="http://localhost:4200/retiro-material-exitoso";
  }
}
