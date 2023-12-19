import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  //1 logic  public  //operation //CrUD  //
  //Create >push>add>save
  //Retrive  >getll>search> find
  //Update >edit
  //Delete


  
  getalluser():User[]{

    return this.users;
  }

  usercount(){

    return this.users.length;
  }



  // get user by id

  getuserbyid(id:number):User |undefined{

    return this.users.find( user => user.id === id );
}

  //2 save data  private



  deleteuser(id:number){

    const index = this.users.findIndex((user => user.id === id));
    this.users.splice(index,1);
   
   }


 private users : User[] =   [

    {
      id:1,
      name:"ahmed",
      age:3,
      username:"amegahed",
      password:"122"

    },
    {
      id:2,
      name:"hassan",
      age:3,
      username:"amegahed",
      password:"122"

    },
    {
      id:3,
      name:"ali",
      age:3,
      username:"amegahed",
      password:"122"

    },


  ];


}
