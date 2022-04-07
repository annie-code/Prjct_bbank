import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  url:string='http://localhost:60040/api/User/';
  subs!: Subscription ;
  authLoggedIn!:boolean;
  constructor(private us:AuthService,private rout: Router,private http: HttpClient) { }
  ngOnDestroy():void{
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.subs=this.us.OnLoggedIn.subscribe(result=>this.authLoggedIn=result);
  }
  logout(){
    this.authLoggedIn = false;
   // sessionStorage.setItem("logout","false");
    this.rout.navigate(['/Home']);
    localStorage.removeItem("token");
  }
  Delete(){
    const c=localStorage.getItem("token");
    console.log(c);
   
   this.http.delete(this.url+'Delete/'+c).subscribe({
    next:data=>{
      this.authLoggedIn = false;
      this.rout.navigate(['/login']);
    },
    error:error=>{
      console.error('There was an error!');
    }
  });
}

}
