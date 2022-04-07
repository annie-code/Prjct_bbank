import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder , Validator, Validators, NgForm} from '@angular/forms';

import { Stock } from '../stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blood-stock',
  templateUrl: './add-blood-stock.component.html',
  styleUrls: ['./add-blood-stock.component.css']
})
export class AddBloodStockComponent implements OnInit {

  frmstock: FormGroup ;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private rout:Router        ) {
    this.frmstock= this.formBuilder.group({
   
      StockId:new FormControl(null),
      Blood_Group:new FormControl('',Validators.required),
      Quantity:new FormControl('',Validators.required),
      Stock_Date:new FormControl('',Validators.required),
      Location:new FormControl('',Validators.required),
    });
   }

   addBloodStock(frmstock : any){
    if(frmstock.valid){
      let s:Stock=frmstock.value as Stock;
      this.http.post('http://localhost:60040/api/BloodStock',s).subscribe(response=>{
        alert('Product Saved');
        this.rout.navigate(['/AdminDashboard']);
      },error=>{ 
        alert('Error Saving');
      });
    }
   
    else{
      alert('Blood Stock Not Added');
    }
 }

  ngOnInit(): void {
  }
  get a(){
    return this.frmstock.controls;

  }
}
