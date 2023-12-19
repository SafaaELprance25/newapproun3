import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {


  users : User[]=[];

  userserve : UsersService = inject(UsersService);

  //userserve.logic only

  //this.users = this.userserve.getalluser();



  constructor(){
    this.users = this.userserve.getalluser();
  }


  deleteruser(id:number){
    this.userserve.deleteuser(id);
    
      }

}
