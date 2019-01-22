import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {PkmnSearchService} from './pkmn-search.service';
import {PkmnSaveService} from './pkmn-save.service';
import {Pkmn} from './Pkmn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pkmn';
  search: FormGroup;
  pkmnList: Pkmn[];

    ngOnInit() {
       this.search = new FormGroup({
         start: new FormControl(''),
         end: new FormControl('')
       });
   }

   constructor(private PkmnSearchService: PkmnSearchService, private PkmnSaveService: PkmnSaveService) {}

   getPkmnList() {
       this.pkmnList = this.PkmnSearchService.searchPkmn(new Date(this.search.value.start),new Date(this.search.value.end));
   }

   savePkmn(){
    this.PkmnSaveService.savePkmn(this.pkmnList);
   }
}
