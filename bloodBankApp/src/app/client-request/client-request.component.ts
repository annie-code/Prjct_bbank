import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup ,FormBuilder, Validator, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Request} from '../Request';
import { BloodRequestService } from '../blood-request.service';
@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {
  requestList:Request[]=[] ;
  request: any = {};
  selectedStock: any= {};
  currentUser: any = {};
  frmCompany : FormGroup;
  constructor(private formBuilder : FormBuilder,private rout: Router,
    private http:HttpClient,private bloodrequest:BloodRequestService) { 
  this.frmCompany = this.formBuilder.group({
    userName : new FormControl('',Validators.required),   
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),   
    contactNo: new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required)  
  });
};


  ngOnInit(): void {
    this.selectedStock = JSON.parse(JSON.stringify(localStorage.getItem("selectedStock")));
    this.currentUser = JSON.parse(JSON.stringify(localStorage.getItem("currentUser")));
    console.log('Selected Stock ID:' + this.selectedStock.Stock_ID);
    console.log('Current User ID:' + this.currentUser.UserId);
  }

  get fr()
  {
    return this.frmCompany.controls; 
  }

  Submit(formObject: any){
    debugger
    formObject.value.Stock_ID=JSON.parse(this.selectedStock).Stock_ID;
    formObject.value.UserId=JSON.parse(this.currentUser).UserId;
    this.bloodrequest.Add(formObject.value)
    .then(response=>{
      this.requestList=response as Request[];
      alert('Request Submitted');
      this.rout.navigate(['/clientDash'])
    })
    .catch(function(err){      
    });
  }
}


