import { Injectable } from '@angular/core';
import { Mineral } from '../models/minerals';


@Injectable({
  providedIn: 'root'
})
export class MineralsService {

  constructor() { }

  public getMinerals() : Mineral[] {
    let mineral = new Mineral();
    mineral.id = 1;
    mineral.name  = "Graphite";
    mineral.h = "1";
    mineral.color = "steel-gray to black";
    mineral.composition = "C";

    return [mineral];
  }

}
