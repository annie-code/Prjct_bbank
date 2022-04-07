import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { User_Regis } from '../User_Regis';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  view: any=[];
  
  name=JSON.parse(JSON.stringify(localStorage.getItem("currentUser")));
  constructor( private rout: Router,private http:HttpClient) { 
  }

  ngOnInit(): void {
    
    let UserName = JSON.parse(this.name).UserName;
    this.http.get('http://localhost:60040/api/User/ViewProfile/' +UserName).subscribe( response=>{
      this.view=response;
    },error=>{
      alert('Error fetching data')
    });
  }

  
  Update(){
    this.rout.navigate(['/UpdateProfile']);
  }



  }
    

