import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { User } from '../user-data';
import { UserFetch } from '../user-fetch';



@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html'
})
export class GetUserComponent implements OnInit {


  displayData: boolean;
  user: UserFetch;
  users: User[] = [];
  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
      console.log("Hello Amol");
      console.log(data);
      console.log("Hello End");
      
    });
  }
  fetchId = 1;

  getUser() {
    this.dataservice.getUser(this.fetchId).subscribe(data => {
      this.user = data;
      console.log(data);
     this.displayData=true;
    });
  }

  idtoUpdate = 1;
  updateUser() {
    this.dataservice.getUser(this.idtoUpdate).subscribe(data => {
      this.user = data;
      this.user.model = 'Updated Model';
      this.dataservice.updateUser(this.user).subscribe(data1 => {
        this.getUsers();
      });
    });
  }


  ngOnInit() {
    this.getUsers();
    this.getUser();
  }

}
