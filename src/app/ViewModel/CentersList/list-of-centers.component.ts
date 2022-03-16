import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Center} from "../../Model/Entity/Center";
import {CenterDao} from "../../Model/Dao/CenterDao";

@Component({
  selector: 'app-list-of-centers',
  templateUrl: '../../View/CentersList/list-of-centers.component.html',
  styleUrls: ['../../View/CentersList/list-of-centers.component.css']
})
export class ListOfCentersComponent implements OnInit {
  Centers: Center[];

  constructor(private router:Router) {
    this.Centers=CenterDao.GetAllCenters()
  }

  ngOnInit(): void {
  }

}
