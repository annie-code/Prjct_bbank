import { Component, OnInit } from '@angular/core';
import { ActiveCamps } from '../ActiveCamp';
import { CampService } from '../camp.service';

import { Router } from '@angular/router';
import {FormControl, FormGroup ,FormBuilder, Validator, NgForm, Validators} from '@angular/forms';
import { Stock } from '../stock';

@Component({
  selector: 'app-active-camp',
  templateUrl: './active-camp.component.html',
  styleUrls: ['./active-camp.component.css']
})
export class ActiveCampComponent implements OnInit {
  
  activecamp: any;
  inLocation:string | undefined = "";
 
  constructor( private camp:CampService,
    private formBuilder : FormBuilder,
    private rout: Router) { 

    }

  ngOnInit(): void {
    
  }
  search(){
    this.camp.GetActiveCampsByLocation(this.inLocation)
    .then(response => {
      this.activecamp= response;
      if(this.activecamp==null ||this.activecamp.length==0 )
      {
        alert("No data available");
      }
    })
    .catch(function(err){
      
    });
  }
  Register(campId: any){
    let camps = this.activecamp as ActiveCamps[];
    let selectedCamp = camps.find(obj => obj.CampId === campId);
    localStorage.setItem("selectedCamp", JSON.stringify(selectedCamp));
    console.log(JSON.stringify(selectedCamp));
    this.rout.navigate(['/CampRegis']);
  }

}
