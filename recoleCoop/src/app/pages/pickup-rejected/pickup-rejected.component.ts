import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-rejected',
  templateUrl: './pickup-rejected.component.html',
  styleUrls: ['./pickup-rejected.component.scss']
})
export class PickupRejectedComponent implements OnInit {

  imageRejectedPath = 'assets/img/pickup-rejected.png';
  imageAcopioPath = 'assets/img/acopio-map.png';
  pickupRejectedTitle = 'Lo sentimos...\nSu pedido de retiro no podrá ser realizado.\nUsted se encuentra a mas de 6km del centro de acopio.';
  acopioAdressTitle = 'Acerque el material a nuestro centro ubicado en Darragueira 1380';
  pickupOffersTitle = 'O revise las ofertas de \ntransporte en su zona';
  offersButtonText = 'Ver ofertas';
  
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  offersPage(){
    this.router.navigate(["/en-construccion"]);
  }

}
