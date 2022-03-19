import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./ViewModel/HomePage/home-page.component";
import { ListOfCentersComponent } from "./ViewModel/CentersList/list-of-centers.component";
import { Appointment } from './Model/Entity/Appointment';
import { SearchComponent } from './ViewModel/Search/search.component';
import {AppointmentComponent} from "./ViewModel/Appointment/appointment.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Centers', component: ListOfCentersComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Appointment/:cin', component: AppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
