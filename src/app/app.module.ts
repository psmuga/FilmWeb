
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';


import { MdSidenavModule, MdButtonModule, MdInputModule , MdFormFieldModule} from '@angular/material';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule,
    MdSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    NgbModule.forRoot(),
    MdFormFieldModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
