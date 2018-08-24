import { Component, OnInit } from '@angular/core';
import { UserDataModel } from '../user_models/user.data.model';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import * as firebase from '../../../../../node_modules/firebase';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<UserDataModel[]>;
  id: string;
  bindingModel: UserDataModel

  constructor(
    private userService: UserService,
     private route: Router) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }
}