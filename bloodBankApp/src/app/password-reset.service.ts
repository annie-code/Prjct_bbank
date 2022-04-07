import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PasswordReset } from './PasswordReset';

@Injectable({
    providedIn: 'root'
  })

  export class PasswordResetService{

    
    url: string='http://localhost:60040/api/User/';
    Password:string | undefined;
    ConfirmPassword:string | undefined;
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
  
    Validate(Password : string){
       return this.http.post<any>(this.url+'Login',{Password});
       
    }
    
  }
