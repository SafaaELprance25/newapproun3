import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ErrorComponent } from './error/error.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HOMEComponent } from './home/home.component';
import { MENUComponent } from './menu/menu.component';
import { ABOUTComponent } from './about/about.component';
import { SERVICESComponent} from './services/services.component';
import { AppComponent } from './app.component';


const routes: Routes = [


  {
    path: '',
    component: ListusersComponent,
    title: 'list page'
  },
  {
    path: 'add',
    component: AdduserComponent,
    title: 'add details'
  },

  //add new comp here
  {
    path: 'view/:id',
    component: ViewuserComponent,
    title: 'view details'
  },

  {
    path: 'edit',
    component: EdituserComponent,
    title: 'edit details'
  },


  //last one
  {
    path: '**',
    component: ErrorComponent,
    title: 'error details'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
