import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Entity/Appointment';
import { Center } from 'src/app/Model/Entity/Center';

@Component({
  selector: 'app-appointment',
  templateUrl: '../View/appointment.component.html',
  styleUrls: ['../View/appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  //appointment : Appointment;
  //center : Center;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

}
