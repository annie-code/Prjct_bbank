import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ThrowStmt } from '@angular/compiler';
import { Subscription } from 'rxjs';
import {FormControl, FormGroup ,FormBuilder, Validator, NgForm, Validators} from '@angular/forms';
import { User_Regis } from '../User_Regis';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  currentUser: any = {};
  frmCompany : FormGroup;

  constructor(private us :AuthService,
    private formBuilder : FormBuilder,
    private rout: Router) { 
      this.frmCompany = this.formBuilder.group({
        User_FirstName: new FormControl('',Validators.required),
        User_LastName: new FormControl('',Validators.required),
        Height : new FormControl('',Validators.required),
        Weight: new FormControl('',Validators.required), 
        Email: new FormControl('',Validators.required),
        Location: new FormControl('',Validators.required),    
        User_ContactNo: new FormControl('',Validators.required),
        
      });

      this.currentUser = JSON.parse(JSON.stringify(localStorage.getItem("currentUser")));
      console.log('Current User:' + JSON.stringify(localStorage.getItem("currentUser")));
      this.frmCompany.setValue({
        User_FirstName: JSON.parse(this.currentUser).User_FirstName,
        User_LastName: JSON.parse(this.currentUser).User_LastName,
        Height : JSON.parse(this.currentUser).Height,
        Weight: JSON.parse(this.currentUser).Weight, 
        Email: JSON.parse(this.currentUser).Email,
        Location: JSON.parse(this.currentUser).Location,    
        User_ContactNo: JSON.parse(this.currentUser).User_ContactNo
      });
    }


  ngOnInit(): void {
  }
  
register(frmCompany:any) {
  if (frmCompany.valid) {
    console.log(frmCompany.value);
    frmCompany.value.UserId=JSON.parse(this.currentUser).UserId;
    frmCompany.value.UserName=JSON.parse(this.currentUser).UserName;
    frmCompany.value.User_Age=JSON.parse(this.currentUser).User_Age;
    frmCompany.value.User_Type=JSON.parse(this.currentUser).User_Type;
    frmCompany.value.User_Gender=JSON.parse(this.currentUser).User_Gender;
    this.us.Update(frmCompany.value).subscribe(response => {
      alert('User Detail updated');
    }, error => {
      alert('Error saving');
    });
  }
  else {
    alert('Invalid form data');
  }
}

get s()
{  
  
    return this.frmCompany.controls; 
}
    


  }
