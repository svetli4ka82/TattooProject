import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TattooList } from '../models/tattoo-list.model';
import { TattooService } from '../tattoo.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-tattoo-details',
  templateUrl: './tattoo-details.component.html',
  styleUrls: ['./tattoo-details.component.css']
})
export class TattooDetailsComponent implements OnInit {
  tattoo: TattooList;
  id: string;
  tattooList: TattooList[];

  constructor(
    private tattooService: TattooService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tattooService.getById(this.id)
      .subscribe((data) => {
        this.tattoo = data;
      })
    //////////////////////////////
    this.tattooService.listMyTattos()
      .subscribe(data => {
        this.tattooList = data; //correct data
      })
  }

  delete() {
    this.tattooService.deleteTattoo(this.id)
      .subscribe(() => {
        this.tattooService.getAllTattoos();

        this.toastr.success('Deleted tattoo.', 'Success');
        this.router.navigate(['/tattoos/list'])
      });
  }

  isMine(id) {
    let keys = Object.values(this.tattooList);//obj

    for (let key of keys) {

      console.log(id)
      console.log(key['id'])///str

      let compare = id.localeCompare(key['id']);
      console.log(compare)

      if (compare === 0) {
        console.log(true)
        return true;
      }
    }
    console.log(false)
    return false;
  }

  show() {
    console.log(this.isMine(this.id))//undef

    if (!this.isMine(this.id) && !this.authService.isAdmin()) {
      return false;
    } else {
      return true;
    }
  }
}
