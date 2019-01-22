import { Injectable } from "@angular/core";
import { Recepten } from "./recepten.js";
import { constructor, Int32 } from "mongodb";
import { recepten } from "./recepten.1.js";

@Injectable({
  providedIn: "root"
})
export class ToevoegenRecepte {
  constructor() {}
  ToevoegRecept(ReceptList: recepten[]) {
    for (let recepten of ReceptList) {
      localStorage.setItem(recepten.naam, JSON.stringify(recepten));
    }
  }
}
