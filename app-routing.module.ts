import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PkmnSearchService } from "./pkmn-search.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
