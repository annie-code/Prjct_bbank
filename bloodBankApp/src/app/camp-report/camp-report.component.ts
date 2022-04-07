import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camp } from '../camp';
@Component({
  selector: 'app-camp-report',
  templateUrl: './camp-report.component.html',
  styleUrls: ['./camp-report.component.css']
})
export class CampReportComponent implements OnInit {
   camp:any=[];

  constructor(private http:HttpClient) {
     
   }

  ngOnInit(): void {
    this.http.get('http://localhost:60040/api/Camp/ViewCampReport').subscribe(response=>{
      this.camp=response ;
      console.log(response);
    },error=>{
      alert('Error Fetching data');
    });
  }
  Delete(CampId:any){
    this.http.delete("http://localhost:60040/api/Camp/DeleteCamp/" +CampId).subscribe(response=>{
      alert('Delete Succefully');
    },error=>{
      alert('Failed');
    });
    


  }

}
