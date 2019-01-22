export class Recepten {
  naam: string;
  aantal_caloriën: Int32List[];
  ingrediënten: string;
  benodigde_tijd: Int32List;
  constructor(
    naam: string,
    aantal_caloriën: Int32List[],
    ingrediënten: string,
    benodigde_tijd: Int32List
  ) {
    this.naam = naam;
    this.aantal_caloriën = aantal_caloriën;
    this.ingrediënten = ingrediënten;
    this.benodigde_tijd = benodigde_tijd;
  }
}
