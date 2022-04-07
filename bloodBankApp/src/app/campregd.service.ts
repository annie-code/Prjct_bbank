import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


import { Camp_Regd } from './donor-regis/camp_regd';


@Injectable({
  providedIn: 'root'
})
export class CampregdService {

  url:string="http://localhost:60040/api/NewCampReg";
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  UserName:string | undefined;
  DonorAge:string | undefined;
  DonorGender:string | undefined;
  DonorContactNo:string | undefined;
  BloodGroup:string | undefined;
  Height:string | undefined;
  Weight:string | undefined;
  Email: string | undefined;
  DonorFirstName: string | undefined;
  DonorLastName:string | undefined;

  private isLoggedIn=new BehaviorSubject<boolean>(false);
  OnLoggedIn=this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) { }

  isAuthenticated()
  {
    this.isLoggedIn.next(true);
  }
  
  isAuthenticatedloggout()
  {
    this.isLoggedIn.next(true);
  }

  AddRegd(inRegister:any):Promise<any>
  {
    return this.http.post(this.url,inRegister)
      .toPromise()
      .then(response => response)
      .catch(function(error){
        console.log(error.message);
      });
  }
}
