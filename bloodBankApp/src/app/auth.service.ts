import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { AppUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url: string='http://localhost:60040/api/User/';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //private options = new HttpParams({ headers: this.headers });


  User_Type: number | undefined;
  UserName:string | undefined;
  Password:string | undefined;
  
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

  Validate(UserName: string ,Password : string,User_Type:number):Promise<AppUser>{
     return this.http.post<any>(this.url+'Login',{UserName,Password,User_Type})
     .toPromise()
            .then(response => response)
            .catch(function(err){
                console.log(err.message);
            });
     
  }
  Register(user:any){
    return this.http.post<any>(this.url+'Register',user,{headers:{'Content-Type': 'application/json'}});}
 
 View(c:any){
     return this.http.get<any>(this.url +'ViewProfile/' + c).toPromise()
     .then(response=>response)
    .catch (function(error) {
     console.log(error.message);
   });
  }
  Update(profile:any){

    return this.http.put(this.url+'/UpdateProfile/',profile);
  
  }
 
 

 checkIfAvailable(uName: any){
    return this.http.get<any>(this.url+'CheckIfAvailable/' + uName);
 }
  
}
