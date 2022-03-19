import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Entity/Appointment';
import { Center } from 'src/app/Model/Entity/Center';
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentDao } from "../../Model/Dao/AppointmentDao";
import { CenterDao } from "../../Model/Dao/CenterDao";

@Component({
  selector: 'app-appointment',
  templateUrl: '../../View/Appointment/appointment.component.html',
  styleUrls: ['../../View/Appointment/appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment | undefined;
  center: Center | undefined;

  constructor(route: ActivatedRoute) {
    this.appointment = AppointmentDao.GetAppointmentByCin(route.snapshot.params.cin)
    this.center = CenterDao.GetCenterByName(this.appointment?.centre_name!)
    console.log(this.center)
  }

  ngOnInit(): void {
  }

}
