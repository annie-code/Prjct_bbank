import { Component, OnInit } from '@angular/core';
import { StockSeriveService } from '../stock-service.service';
import { Stock } from '../stock';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search-blood-bank',
  templateUrl: './search-blood-bank.component.html',
  styleUrls: ['./search-blood-bank.component.css']
})
export class SearchBloodBankComponent implements OnInit {
  stock: any[] = [];
  
  inLocation:string | undefined="";
  constructor(private st:StockSeriveService,
    private formBuilder : FormBuilder,
    private rout: Router) {

     }

    ngOnInit(): void {
    }
    search(){
      this.st.GetBloodStock(this.inLocation)
      .then(response => {
        this.stock= response;
        if(this.stock==null ||this.stock.length==0 )
      {
        alert("No data available");
        this.rout.navigate(['/clientDash'])
      }
      })
      .catch(function(err){
    });
  }
  Request(stockId: any){
    debugger
    let selectedStock = this.stock.find(obj => obj.Stock_ID === stockId);
    localStorage.setItem("selectedStock", JSON.stringify(selectedStock));
    console.log(JSON.stringify(selectedStock));
    this.rout.navigate(['/ClientReq']);
  }
}
