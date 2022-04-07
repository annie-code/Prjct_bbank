import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockSeriveService {
  url:string='http://localhost:60040/api/BloodStock/';
  Stock_ID:number | undefined;
  Blood_Group:string | undefined;
  Location:string | undefined;
  Date:string | undefined;
  Quantity:number | undefined;
  stock: Stock[]=[];

  private isLoggedIn=new BehaviorSubject<boolean>(false);
  OnLoggedIn=this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) { 

  }
  isAuthenticated()
  {
    this.isLoggedIn.next(true);
  }
  
  isAuthenticatedloggout()
  {
    this.isLoggedIn.next(true);
  }

  GetBloodStock(Location:any):Promise<any>
  {
    return this.http.get<any>(this.url+'GetByLocation/'+Location)
      .toPromise()
      .then(response => response)
      .catch(function(error){
        console.log(error.message);
      });
  }
}