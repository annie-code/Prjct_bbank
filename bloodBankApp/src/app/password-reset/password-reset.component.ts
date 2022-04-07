import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup ,FormBuilder,  NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordReset } from '../PasswordReset';
import { HttpClient } from '@angular/common/http';
import { PasswordResetService } from 'src/app/password-reset.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  currentUser: any = {};
  frmCompany : FormGroup ;
  passwordreset:PasswordReset[]=[];
  isNotValild: boolean = false;
  constructor(private ps:PasswordResetService,
    private formBuilder : FormBuilder,
    private rout: Router,private http:HttpClient) {
      this.frmCompany = new FormGroup({
        Password: new FormControl('',Validators.required),
        ConfirmPassword: new FormControl('',Validators.required),
      });
      this.currentUser = JSON.parse(JSON.stringify(localStorage.getItem("currentUser")));
      console.log('Current User:' + JSON.stringify(localStorage.getItem("currentUser")));
     };


     get p(){
      return this.frmCompany.controls;
    }

  ngOnInit(): void {
  }

  resetPassword(frmCompany : any){
    debugger
    if(frmCompany.valid){
      console.log(frmCompany.value);
      frmCompany.value.UserId=JSON.parse(this.currentUser).UserId;
      frmCompany.value.UserName=JSON.parse(this.currentUser).UserName;
      frmCompany.value.User_FirstName=JSON.parse(this.currentUser).User_FirstName;
      frmCompany.value.User_LastName=JSON.parse(this.currentUser).User_LastName;
      frmCompany.value.User_Age=JSON.parse(this.currentUser).User_Age;
      frmCompany.value.User_Type=JSON.parse(this.currentUser).User_Type;
      frmCompany.value.User_Gender=JSON.parse(this.currentUser).User_Gender;
      frmCompany.value.User_ContactNo=JSON.parse(this.currentUser).User_ContactNo;
      frmCompany.value.Blood_Group=JSON.parse(this.currentUser).Blood_Group;
      frmCompany.value.Height=JSON.parse(this.currentUser).Height;
      frmCompany.value.Weight=JSON.parse(this.currentUser).Weight;
      frmCompany.value.Email=JSON.parse(this.currentUser).Email;
      frmCompany.value.Location=JSON.parse(this.currentUser).Location;
      frmCompany.value.DOB=JSON.parse(this.currentUser).DOB;

      this.http.put('http://localhost:60040/api/User/ResetPassword',frmCompany.value).subscribe(response=>{
        alert('Password Reset Successful');
        this.rout.navigate(['/login']);
      },error=>{ 
        alert('Error Saving');
        this.rout.navigate(['/login']);
      });
    }
    else{
      alert('Password Reset Failed');
      this.rout.navigate(['/login']);
    }
 }
}
  


