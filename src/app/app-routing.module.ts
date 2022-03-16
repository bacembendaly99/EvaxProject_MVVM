import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./ViewModel/HomePage/home-page.component";
import {ListOfCentersComponent} from "./ViewModel/CentersList/list-of-centers.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'Centers', component: ListOfCentersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
