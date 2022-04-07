import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  view: any=[];
  
  name=JSON.parse(JSON.stringify(localStorage.getItem("currentUser")));
  url:string='http://localhost:60040/api/BloodRequest/Delete/';
  rout: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let UserName = JSON.parse(this.name).UserName;
    this.http.get('http://localhost:60040/api/User/ViewProfile/' +UserName).subscribe( response=>{
      this.view=response;
    },error=>{
      alert('Error fetching data')
    });
  }

  Delete(){
    const r=localStorage.getItem("RequestId");
    console.log(r);
   
   this.http.delete(this.url+r).subscribe({
    next:data=>{
      
      this.rout.navigate(['/Client-Dashboard']);
    },
    error:error=>{
      console.error('There was an error!');
    }
  });
}

}
