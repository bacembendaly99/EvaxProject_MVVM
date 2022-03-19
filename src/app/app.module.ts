import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './ViewModel/HomePage/home-page.component';
import { ListOfCentersComponent } from './ViewModel/CentersList/list-of-centers.component';
import { AppointmentComponent } from './ViewModel/Appointment/appointment.component';
import { SearchComponent } from './ViewModel/Search/search.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListOfCentersComponent,
    AppointmentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
