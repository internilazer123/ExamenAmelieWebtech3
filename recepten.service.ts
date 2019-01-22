import { Injectable } from "@angular/core";
import doc from "../pokemon.json";

@Injectable({
  providedIn: "root"
})
export class PkmnSearchService {
  constructor() {}

  searchPkmn(begin: Date, end: Date): [] {
    console.log(doc);
    let pkmnList: any = [];

    for (let pkmn of doc.docs) {
      let dateOwned = new Date(pkmn.owned);
      if (dateOwned >= begin && dateOwned <= end) {
        pkmnList.push(pkmn);
      }
    }
    return pkmnList;
    savePkmn(pkmnList: Pkmn[]){
      for(let pkmn of pkmnList){
        localStorage.setItem(pkmn.name, JSON.stringify(pkmn));;
      }
    }
  }
}
