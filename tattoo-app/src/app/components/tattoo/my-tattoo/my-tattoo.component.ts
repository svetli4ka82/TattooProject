import { Component, OnInit, Input } from '@angular/core';
import { TattooService } from '../tattoo.service';
import { Observable } from 'rxjs';
import { TattooList } from '../models/tattoo-list.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-my-tattoo',
  templateUrl: './my-tattoo.component.html',
  styleUrls: ['./my-tattoo.component.css']
})
export class MyTattooComponent implements OnInit {
  tattoos: Observable<TattooList[]>

  constructor(
    private tattooService: TattooService) { }

  ngOnInit() {
    this.tattoos = this.tattooService.listMyTattos();
  }
}
