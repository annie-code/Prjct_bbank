import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validator, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CampregdService } from '../campregd.service';
import { Camp_Regd } from './camp_regd';
@Component({
  selector: 'app-donor-regis',
  templateUrl: './donor-regis.component.html',
  styleUrls: ['./donor-regis.component.css']
})
export class DonorRegisComponent implements OnInit {
  regdList:Camp_Regd[]=[];
  regd:any={};
  currentUser: any = {};
  selectedCamp: any= {};
  frmCamp: FormGroup ;
  constructor(private formBuilder: FormBuilder , private campRegd:CampregdService,private rout: Router) { 
  this.frmCamp= this.formBuilder.group({
   
    UserName:new FormControl('',Validators.required),
    Donor_FirstName:new FormControl('',Validators.required),
    Donor_LastName:new FormControl('',Validators.required),
    Donor_Age:new FormControl('',Validators.required),
    Donor_Gender:new FormControl('',Validators.required),
    Donor_ContactNo:new FormControl('',Validators.required),
    Blood_Group:new FormControl('',Validators.required),
    Height:new FormControl('',Validators.required),
    Weight:new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),

  });
}

  ngOnInit(): void {
    this.selectedCamp = JSON.parse(JSON.stringify(localStorage.getItem("selectedCamp")));
    console.log('Selected Camp ID:' + this.selectedCamp.CampId);
  }


  get c(){
    return this.frmCamp.controls;
  }

  campRegistration(frmCamp : any){
    frmCamp.value.campId=JSON.parse(this.selectedCamp).CampId;
    if(frmCamp.valid){
      this.campRegd.AddRegd(frmCamp.value)
      .then(response=>{
       this.regdList=response as Camp_Regd[];
        alert('Request Submitted');
        this.rout.navigate(['/Dashboard'])
      })
      .catch(function(err){      
      });
    
    }
  else{
    alert('Invalid Form Data');
  }
}
}
