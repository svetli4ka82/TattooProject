import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TattooList } from '../models/tattoo-list.model';
import { TattooService } from '../tattoo.service';

@Component({
  selector: 'app-all-tattoo',
  templateUrl: './all-tattoo.component.html',
  styleUrls: ['./all-tattoo.component.css']
})
export class AllTattooComponent implements OnInit {
  tattoos: Observable<TattooList[]>

   constructor(private tattooService: TattooService) { }

  ngOnInit() {
    this.tattoos = this.tattooService.getAllTattoos();
  }
}
