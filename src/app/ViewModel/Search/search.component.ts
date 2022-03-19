import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: '../../View/Search/search.component.html',
  styleUrls: ['../../View/Search/search.component.css']
})
export class SearchComponent implements OnInit {
  cin: number | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  SearchAppointment(): void {
    this.router.navigate(['Appointment', this.cin])

  }

}
