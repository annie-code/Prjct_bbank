import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blood-stock-report',
  templateUrl: './blood-stock-report.component.html',
  styleUrls: ['./blood-stock-report.component.css']
})
export class BloodStockReportComponent implements OnInit {
  stock:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:60040/api/BloodStock/GetReport').subscribe(response=>{
      this.stock=response ;
      console.log(response);
    },error=>{
      alert('Error Fetching data');
    });
  }
  Delete(stockId:any){
    this.http.delete("http://localhost:60040/api/BloodStock/DeleteBloodStock/" +stockId).subscribe(response=>{
      alert('Delete Succefully');
    },error=>{
      alert('Failed');
    });
    


  }

}
