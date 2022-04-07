import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/home.component';
import { BloodInformationComponent } from './blood-information/blood-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostCampComponent } from './post-camp/post-camp.component';
import { ActiveCampComponent } from './active-camp/active-camp.component';
import { CampService } from './camp.service';
import { SearchBloodBankComponent } from './search-blood-bank/search-blood-bank.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ClientRequestComponent } from './client-request/client-request.component';
import { DonorRegisComponent } from './donor-regis/donor-regis.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AddBloodStockComponent } from './add-blood-stock/add-blood-stock.component';
import { ModifyCampComponent } from './modify-camp/modify-camp.component';
import { BloodStockReportComponent } from './blood-stock-report/blood-stock-report.component';
import { CampReportComponent } from './camp-report/camp-report.component';
import { BloodRequestReportComponent } from './blood-request-report/blood-request-report.component';
import { UpdateBloodStockComponent } from './update-blood-stock/update-blood-stock.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SignUpComponent,
    HomeComponent,
    BloodInformationComponent,
    DashboardComponent,
    PostCampComponent,
    ActiveCampComponent,
    SearchBloodBankComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    ClientRequestComponent,
    DonorRegisComponent,
    
    AdminDashboardComponent,
    ClientDashboardComponent,
    ViewRequestComponent,
    AddBloodStockComponent,
    ModifyCampComponent,
    BloodStockReportComponent,
    CampReportComponent,
    BloodRequestReportComponent,
    UpdateBloodStockComponent,
    PasswordResetComponent,


  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, CampService],
  bootstrap: [AppComponent]
})
export class AppModule { }

