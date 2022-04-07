import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Request } from './Request';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {
  url:string="http://localhost:60040/api/NewBloodRequest";
  UserName: string | undefined;
  User_FirstName: string | undefined;
  User_LastName: string | undefined;
  Email: string | undefined;
  Location: string | undefined;
  Description: string | undefined;
  User_ContactNo: string | undefined;
  Quantity:number|undefined;

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

  Add(inRequest: any):Promise<any>
  {
    debugger
    return this.http.post(this.url,inRequest)
      .toPromise()
      .then(response => response)
      .catch(function(error){
        console.log(error.message);
      });
  }
}


