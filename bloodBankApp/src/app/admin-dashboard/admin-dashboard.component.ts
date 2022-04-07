import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor( private rout: Router) { }

  ngOnInit(): void {
  }
  Save(){
    this.rout.navigate(['/PostCamp']);

  }
  Add(){
    this.rout.navigate(['/AddBloodStock']);

  }
  View(){
    this.rout.navigate(['/CampReport']);

  }
  Stock(){
    this.rout.navigate(['/StockReport']);

  }
  Request(){
    this.rout.navigate(['/RequestReport']);

  }



}
