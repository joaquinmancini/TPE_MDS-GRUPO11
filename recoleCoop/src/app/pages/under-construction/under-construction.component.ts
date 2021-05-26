import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  underConstructionImg = 'assets/img/under-construction.png'
  underConstructionTitle ='Pagina en construccion';
  underConstructionDescription = 'Estamos terminando esta pagina, por favor regrese en 5 dias.'

  constructor() { }

  ngOnInit(): void {
  }

}
