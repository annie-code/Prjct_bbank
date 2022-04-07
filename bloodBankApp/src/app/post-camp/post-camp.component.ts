import { Component, OnInit } from '@angular/core';
import {Camp} from '../camp';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-camp',
  templateUrl: './post-camp.component.html',
  styleUrls: ['./post-camp.component.css']
})
export class PostCampComponent implements OnInit {
  
  camp!:Camp ;
  constructor(private http:HttpClient,private rout: Router){
    this.camp=new Camp(0,'','','','',false);
  }
  ngOnInit(){}
  saveCamp(){
    this.http.post('http://localhost:60040/api/Camp/Camp',this.camp).subscribe(
      (data)=>{alert('saved successfully');
      this.rout.navigate(['/AdminDashboard']);
  },
      (err) =>{console.log(err);alert('Error saving data');}
    );
   


  }
  
}