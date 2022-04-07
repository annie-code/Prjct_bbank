import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ModifyCamp } from './ModifyCamp';



@Injectable({
  providedIn: 'root'
})
export class ModifyServiceService {
  url:string='http://localhost:60040/api/Camp/';
  S_No:number | undefined;
 Location: string | undefined;
  CampName:string | undefined;
  ActiveStatus:boolean | undefined;
  Date:string | undefined;
  
  modifycamp: ModifyCamp[]=[];

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
  GetModifyBloodCamp(Location:any):Promise<any[]>
  {
    return this.http.get<any>(this.url+'GetByLocation/'+Location)
      .toPromise()
      .then(response => response)
      .catch(function(error){
        console.log(error.message);
      });
  }
}
