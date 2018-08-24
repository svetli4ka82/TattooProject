import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TattooService } from '../tattoo.service';
import { AddTattoo } from '../models/add-tattoo.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-tattoo',
  templateUrl: './create-tattoo.component.html',
  styleUrls: ['./create-tattoo.component.css']
})
export class AddTattooComponent implements OnInit {
  bindingModel: AddTattoo;
  constructor(
    private tattooService: TattooService,
    private toastr: ToastrService,
    private router: Router) {
    this.bindingModel = new AddTattoo('', '', '', '');
  }

  ngOnInit() { }

  add() {
    const userId = firebase.auth().currentUser;
    let newBody = Object.assign(this.bindingModel, { 'userId': userId['uid'] })

    this.tattooService
      .addTattoo(newBody)
      .subscribe(() => {
        this.toastr.success('Tattoo aded', 'Success');
        this.router.navigate(['/tattoos/list']);
      })
    }
}