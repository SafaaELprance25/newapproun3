import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

    //for data fromurl
  route: ActivatedRoute = inject(ActivatedRoute);
    // for getting datat from servcie
  userserve = inject(UsersService);

  user :User |undefined;

  constructor() {
    const userid = Number(this.route.snapshot.params['id']);
    this.user = this.userserve.getuserbyid(userid);
  }


}
