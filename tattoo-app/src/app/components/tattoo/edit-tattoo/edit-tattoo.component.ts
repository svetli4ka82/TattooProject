import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TattooService } from '../tattoo.service';
import { TattooList } from '../models/tattoo-list.model';

@Component({
  selector: 'app-edit-tattoo',
  templateUrl: './edit-tattoo.component.html',
  styleUrls: ['./edit-tattoo.component.css']
})
export class EditTattooComponent implements OnInit {
  id: string;
  bindingModel: TattooList;
  
  constructor( 
    private tattooService: TattooService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   
    this.tattooService.getById(this.id)
      .subscribe(data => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id]: this.bindingModel
    }
    this.tattooService.editTattoo(body)
      .subscribe((data) => {
        this.toastr.success('Tattoo edited.', 'Success');
        this.router.navigate(['/tattoos/list']);
      })
  }
}
