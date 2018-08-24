import { Component, OnInit } from '@angular/core';
import { UserDataModel } from '../user_models/user.data.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string;
  bindingModel: UserDataModel;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id)
      .subscribe(data => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id]: this.bindingModel
    }
    this.userService.editUser(body)
      .subscribe((data) => {
        this.toastr.success('User edited.', 'Success');
        this.router.navigate(['/users/list']);
      })
  }
}
