import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }
  Save(){
    this.rout.navigate(['/SearchStock']);

  }

  View(){
    this.rout.navigate(['/ViewRequest'])
  }
}
