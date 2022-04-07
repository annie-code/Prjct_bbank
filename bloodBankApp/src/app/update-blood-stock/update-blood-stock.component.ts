import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Stock} from '../stock';
@Component({
  selector: 'app-update-blood-stock',
  templateUrl: './update-blood-stock.component.html',
  styleUrls: ['./update-blood-stock.component.css']
})
export class UpdateBloodStockComponent implements OnInit {
   
   stockID:number | undefined
   obj=new Stock(0,'','','',0);
  constructor( private actr :ActivatedRoute,private http:HttpClient,private rout: Router) { 
    this.stockID=Number(this.actr.snapshot.paramMap.get('stockId'));
    alert('Update Blood Stock:' +this.stockID);
    
  }

  ngOnInit(): void {
  }
  Update(){
    console.log(this.obj);
    this.http.put('http://localhost:60040/api/BloodStock/UpdateBloodStock/'+this.stockID,this.obj).subscribe(
      (data)=>{alert('update successfully');
      this.rout.navigate(['/AdminDashboard'])},
      (err) =>{console.log(err);alert('Error saving data');}
    );
   




  }

}
