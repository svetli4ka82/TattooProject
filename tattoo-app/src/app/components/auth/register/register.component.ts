import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserRegisterModel } from '../../users/user_models/user.register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: UserRegisterModel;
  roles: string[];
  email: string;
  password: string;
  firstName: string;
  lastName:string;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.model = new UserRegisterModel('', '', '', '' );
  }

  ngOnInit() { }

  register(form: NgForm) {
  this.authService.signUp(this.model);
  }
}


