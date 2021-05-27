import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartoneroService {

  constructor() { }

  getCartonero() {
    let cartonero = JSON.parse("localStorage.getItem('cartonero')");
    return cartonero;
  }

}
