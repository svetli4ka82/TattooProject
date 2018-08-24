import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDataModel } from '../user_models/user.data.model';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
   user: UserDataModel;
  id: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id)
      .subscribe((data) => {
        this.user = data;
        console.log(this.user) //all info
      });
  }

  delete() {
    this.userService.deleteUser(this.id)
      .subscribe(() => {
        this.userService.getAllUsers();
        console.log(this.id) 

        this.toastr.success('Deleted user.', 'Success');
        this.router.navigate(['/users/list'])
      });
  }
}
