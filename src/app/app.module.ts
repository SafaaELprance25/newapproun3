import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ErrorComponent } from './error/error.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MENUComponent } from './menu/menu.component';
import { CONTACTusComponent } from './contactus/contactus.component';
import { APPComponent } from './app/app.component';
import { ABOUTComponent } from './about/about.component';
import { HOMEComponent } from './home/home.component';
import { SERVICESComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AdduserComponent,
    ErrorComponent,
    ViewuserComponent,
    EdituserComponent,
    MENUComponent,
    CONTACTusComponent,
    APPComponent,
    ABOUTComponent,
    HOMEComponent,
    SERVICESComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
