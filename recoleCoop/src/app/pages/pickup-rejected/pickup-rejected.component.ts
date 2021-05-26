import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-pickup-rejected',
  templateUrl: './pickup-rejected.component.html',
  styleUrls: ['./pickup-rejected.component.scss']
})
export class PickupRejectedComponent implements OnInit {

  imageRejectedPath = 'assets/img/pickup-rejected.png';
  imageAcopioPath = 'assets/img/acopio-map.png';
  pickupRejectedTitle = 'Lo sentimos...\nSu pedido de retiro no podrá ser realizado.\nUsted se encuentra a mas de 6km del centro de acopio.';
  constructor() {}

  ngOnInit(): void {

  }

}
