import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RrrComponent } from './rrr/rrr.component';
import { SignupComponent } from './signup/signup.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { WelcomeComponent } from './applicant/welcome/welcome.component';
import { FormComponent } from './applicant/form/form.component';
import { PersonalDetailsComponent } from './applicant/personal-details/personal-details.component';
import { DashboardComponent } from './applicant/dashboard/dashboard.component';
import { NavappComponent } from './applicant/navapp/navapp.component';
import { NewdashboardComponent } from "./applicant/newdashboard/newdashboard.component";
import { FooterComponent } from './footer/footer.component';
import { InstructionsComponent } from './applicant/form/instructions/instructions.component';
import { PersonaldetailsComponent } from './applicant/form/personaldetails/personaldetails.component';
import { UploadComponent } from './applicant/form/upload/upload.component';
import { PaymentComponent } from './applicant/form/payment/payment.component';
import { GuardianComponent } from './applicant/form/guardian/guardian.component';
import { PrintComponent } from './applicant/form/print/print.component';
import { SaveprintComponent } from './applicant/form/saveprint/saveprint.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'nav', component: NavComponent},
  {path: 'passwordRecovery', component: PasswordRecoveryComponent},
  {path: 'rrr', component: RrrComponent},
  {path: 'signup', component: SignupComponent},

  {
    path : 'app', component: ApplicantComponent,
    children:[
      {path: '', pathMatch:'full', component: WelcomeComponent},
      {path: 'navapp', component: NavappComponent},
      {
        path: 'form', component: FormComponent,
        children:[
          {path: '', pathMatch:'full', component: InstructionsComponent},
          {path: 'personaldetails', component: PersonaldetailsComponent},
          {path: 'upload', component: UploadComponent},
          {path: 'payment', component: PaymentComponent},
          {path: 'guardian', component: GuardianComponent},
          {path: 'print', component: PrintComponent},
          {path: 'saveprint', component: SaveprintComponent}

        ]
      },
      {path: 'personalDetails', component: PersonalDetailsComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'newdashboard', component: NewdashboardComponent}
    ]

}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
