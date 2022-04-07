import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from  '@angular/router';
import {AppUser} from '../user';

import {FormControl, FormGroup ,FormBuilder, Validator, NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userobj :  any;
  isSignIn: boolean = true;
  frmCompany : FormGroup;
  frmReset : FormGroup;
  logged : boolean=false;
  constructor(private us :AuthService,
    private formBuilder : FormBuilder,
    private rout: Router,private http:HttpClient) { 
    this.frmCompany = this.formBuilder.group({
      UserName : new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required),
      User_Type: new FormControl('',Validators.required),
    });

    this.frmReset = this.formBuilder.group({
      UserName : new FormControl('',Validators.required),
      Email: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  get fr()
  {
    return this.frmCompany.controls; 
  }

  get frReset()
  {
    return this.frmReset.controls; 
  }

  gotoReset(){
    this.isSignIn = false;
  }

  login(frmCompany: any)
  {
    if(frmCompany.valid)
    { 
      //you can use directly to the validation methods
      let username= frmCompany.value.UserName;
      let password = frmCompany.value.Password;
      let userType=frmCompany.value.User_Type;
      localStorage.setItem("token",username);
      

      this.us.Validate(username,password,userType)
      .then(response => {
        if(response!=null){
          this.userobj = response;
        this.us.isAuthenticated();
        localStorage.setItem("currentUser", JSON.stringify(this.userobj));
        console.log(JSON.stringify(this.userobj));
        this.logged=false;
        debugger
        if(this.userobj.User_Type==1){
        this.rout.navigate(['/Dashboard']);}
        else if(this.userobj.User_Type==2){
          this.rout.navigate(['/clientDash']);
        
        }
        else{
          this.rout.navigate(['/AdminDashboard']);
        
        }

        }
        else{
          alert("Invalid User")
        }
        
      })
      .catch(function(err){
        
      });
    }

    
  }
  verify(frmReset: any){
    debugger
    this.http.post('http://localhost:60040/api/User/Verify',this.frmReset.value).subscribe(response=>{
    debugger
      if(response!=null){
        this.userobj = response;
        this.us.isAuthenticated();
        localStorage.setItem("currentUser", JSON.stringify(this.userobj));
        console.log(JSON.stringify(this.userobj));
        this.logged=false;
        this.rout.navigate(['/PasswordReset']);
      }
    },
    error=>{ 
      alert('Error Saving');
    });
  }
}
