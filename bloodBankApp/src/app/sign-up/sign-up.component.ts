import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup ,FormBuilder, Validator, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppUser } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userobj : AppUser= null as any;
  frmCompany : FormGroup;
  registered : boolean=false;
  invalid: boolean = false;
  constructor(private us :AuthService,
    private formBuilder : FormBuilder,
    private rout: Router) { 
    this.frmCompany = this.formBuilder.group({
      UserName : new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required),
      User_Type: new FormControl('',Validators.required),
      User_FirstName: new FormControl('',Validators.required),
      User_LastName: new FormControl('',Validators.required),
      User_Age: new FormControl('',Validators.required),
      Height : new FormControl('',Validators.required),
      Weight: new FormControl('',Validators.required),
      Email: new FormControl('',Validators.required),
      Location: new FormControl('',Validators.required),
      ConfirmPassword: new FormControl('',Validators.required),
      User_Gender: new FormControl('',Validators.required),
      User_ContactNo: new FormControl('',Validators.required),
      
    });
  };

  ngOnInit(): void {
  }
  register(frmCompany:any){
      //you can use directly to the validation methods
      this.us.Register(frmCompany.value).subscribe(response=> {
        this.userobj = response as AppUser;
        this.registered=false;
        this.rout.navigate(['/login']);
        alert('Sign Up is succesful')
       },error =>{
         this.registered = true;
         alert('Sign Up is Unsuccesful')
       });
  }

  get s(){
    return this.frmCompany.controls;
  }

  checkIfAvailable(value:any){
    let inUserName = value;
    this.us.checkIfAvailable(inUserName).subscribe(response=> {
      this.invalid = response as boolean;
      
     },error =>{
      this.invalid = false;
     });
  }

}
