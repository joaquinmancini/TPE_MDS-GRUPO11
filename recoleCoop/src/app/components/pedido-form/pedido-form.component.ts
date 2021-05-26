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
    let elemento = document.getElementById('img1');
    if (elemento != null){
 
        elemento.style.display = "block";
      
    }
    }
    
}
