import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RrrComponent } from './rrr/rrr.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PersonalDetailsComponent } from './applicant/personal-details/personal-details.component';
import { FormComponent } from './applicant/form/form.component';
import { WelcomeComponent } from './applicant/welcome/welcome.component';
import { ApplicantComponent } from "./applicant/applicant.component";
import { DashboardComponent } from './applicant/dashboard/dashboard.component';
import { NavappComponent } from './applicant/navapp/navapp.component';
import { NewdashboardComponent } from './applicant/newdashboard/newdashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule, MatInputModule, MatRippleModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatStepperModule, MatTabsModule, MatCheckboxModule, MatProgressSpinnerModule, MatListModule, MatTableModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';

import { NgxMatIntlTelInputModule  } from "ngx-mat-intl-tel-input";
import { InstructionsComponent } from './applicant/form/instructions/instructions.component';
import { PersonaldetailsComponent } from './applicant/form/personaldetails/personaldetails.component';
import { PaymentComponent } from './applicant/form/payment/payment.component';
import { UploadComponent } from './applicant/form/upload/upload.component';
import { AppointmentComponent } from './applicant/form/appointment/appointment.component';
import { GuardianComponent } from './applicant/form/guardian/guardian.component';
import { SchoolComponent } from './applicant/form/school/school.component';
import { FooterappComponent } from './applicant/footerapp/footerapp.component';
import { SchoolattendedComponent } from './applicant/form/school/schoolattended/schoolattended.component';
import { ChoiceComponent } from './applicant/form/choice/choice.component';
import { PrintComponent } from './applicant/form/print/print.component';
import { SaveprintComponent } from './applicant/form/saveprint/saveprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    RrrComponent,
    PasswordRecoveryComponent,
    PersonalDetailsComponent,
    FormComponent,
    WelcomeComponent,
    ApplicantComponent,
    DashboardComponent,
    NavappComponent,
    NewdashboardComponent,
    FooterComponent,
    InstructionsComponent,
    PersonaldetailsComponent,
    PaymentComponent,
    UploadComponent,
    AppointmentComponent,
    GuardianComponent,
    SchoolComponent,
    FooterappComponent,
    SchoolattendedComponent,
    ChoiceComponent,
    PrintComponent,
    SaveprintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgxMatIntlTelInputModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
