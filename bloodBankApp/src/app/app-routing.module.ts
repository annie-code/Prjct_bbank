import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { BloodInformationComponent } from './blood-information/blood-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './Home/home.component';
import { ActiveCampComponent } from './active-camp/active-camp.component';
import { LoginComponent } from './login/login.component';
import { PostCampComponent } from './post-camp/post-camp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchBloodBankComponent } from './search-blood-bank/search-blood-bank.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DonorRegisComponent } from './donor-regis/donor-regis.component';
import { ClientRequestComponent } from './client-request/client-request.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CampReportComponent } from './camp-report/camp-report.component';
import { BloodStockReportComponent } from './blood-stock-report/blood-stock-report.component';
import { BloodRequestReportComponent } from './blood-request-report/blood-request-report.component';
import { ModifyCampComponent } from './modify-camp/modify-camp.component';
import { UpdateBloodStockComponent } from './update-blood-stock/update-blood-stock.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AddBloodStockComponent } from './add-blood-stock/add-blood-stock.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"Information",component:BloodInformationComponent},
  {path:"Home",component:HomeComponent},
  {path:"PostCamp",component:PostCampComponent},
  {path: 'ActiveCamp',component:ActiveCampComponent},
  {path:'SearchStock',component:SearchBloodBankComponent},
  {path:'ViewProfile',component:ViewProfileComponent},
  {path:'UpdateProfile',component:UpdateProfileComponent},
  {path:'ViewRequest',component:ViewRequestComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent},
  {path:'CampRegis',component:DonorRegisComponent},
  {path :'ClientReq',component:ClientRequestComponent},
  {path:'clientDash',component:ClientDashboardComponent},
  {path:'CampReport',component:CampReportComponent},
  {path:'StockReport',component:BloodStockReportComponent},
  {path:'RequestReport',component:BloodRequestReportComponent},
  {path:'modifyCamp/:campId',component:ModifyCampComponent},
  {path:'UpdateStock/:stockId',component:UpdateBloodStockComponent},
  {path: 'PasswordReset',component: PasswordResetComponent},
  {path:'AddBloodStock',component:AddBloodStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
