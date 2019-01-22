import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ToevoegenRecepte } from "./recepten.service";
import { Recepten } from "./recepten";
import { stringify } from "@angular/core/src/render3/util";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Recepten";
  search: FormGroup;
  pkmnList: Recepten[];
  ngOnInit() {
    this.search = new FormGroup({
      start: new FormControl(""),
      end: new FormControl("")
    });
  }
  constructor(private Toevoegenrecepte: ToevoegenRecepte) {}
  getPkmnList() {
    this.receptList = this.Toevoegenrecepte.ToevoegRecept(
      new stringify(this.search.value.start)
    );
  }
  savePkmn() {
    this.Toevoegenrecepte.ToevoegRecept(this.pkmnList);
  }
}
