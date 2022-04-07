import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup ,FormBuilder, Validator, NgForm, Validators} from '@angular/forms';
import {Camp} from '../camp';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modify-camp',
  templateUrl: './modify-camp.component.html',
  styleUrls: ['./modify-camp.component.css']
})
export class ModifyCampComponent implements OnInit {
  

  campId:number | undefined
  camp=new Camp(0,'','','','',false);
  constructor(
    private formBuilder : FormBuilder,
    private rout: Router,
    private actr :ActivatedRoute,
    private http:HttpClient) {
      this.campId=Number(this.actr.snapshot.paramMap.get('campId'));
    alert('Update Camp:' +this.campId);
     }

  ngOnInit(): void {
  }
  
  ModifyCamp(){
    this.rout.navigate(['/PostCamp']);

}
Update(){
  console.log(this.camp);
  this.http.put('http://localhost:60040/api/Camp/UpdateCamp/'+this.campId,this.camp).subscribe(
    (data)=>{alert('update successfully');
    this.rout.navigate(['/AdminDashboard'])},
    (err) =>{console.log(err);alert('Error saving data');}
  );

}
}