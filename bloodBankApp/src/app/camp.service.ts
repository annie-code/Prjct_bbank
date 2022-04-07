import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { ActiveCamps } from './ActiveCamp';
import { Camp } from './camp';


@Injectable({
  providedIn: 'root'
})
export class CampService {
  url:string='http://localhost:60040/api/Camp/';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  CampId:number | undefined;
  CampName:string | undefined;
  ActiveStatus:boolean | undefined;
  Date:string | undefined;
  Time:string | undefined;
  activecamp: ActiveCamps[]=[];

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
  GetActiveCampsByLocation(location:any):Promise<ActiveCamps[]>
  {
    return this.http.get<any>(this.url+'GetByLocation/'+location)
      .toPromise()
      .then(response => response)
      .catch(function(error){
        console.log(error.message);
      });
  }
}
