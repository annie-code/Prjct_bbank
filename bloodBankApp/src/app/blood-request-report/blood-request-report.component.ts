import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blood-request-report',
  templateUrl: './blood-request-report.component.html',
  styleUrls: ['./blood-request-report.component.css']
})
export class BloodRequestReportComponent implements OnInit {
  request:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:60040/api/BloodRequest/ViewAllRequest').subscribe(response=>{
      this.request=response ;
      console.log(response);
    },error=>{
      alert('Error Fetching data');
    });
  }
  Delete(requestID:any){
    this.http.delete("http://localhost:60040/api/BloodRequest/Delete/" +requestID).subscribe(response=>{
      alert('Delete Succefully');
    },error=>{
      alert('Failed');
    });
    


  }
  Accept(requestID:any){
    this.http.delete("#" +requestID).subscribe(response=>{
      alert('Accepted Succefully');
    },error=>{
      alert('Failed');
    });
    


  }

}
