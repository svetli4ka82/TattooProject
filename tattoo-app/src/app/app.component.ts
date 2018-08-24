import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tattoo-app'; 

  ngOnInit(): void {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyC-wrTd5IgR7xweaGgLnaN3HJz4JxSqv7A",
    //   authDomain: "tattoo-catalog.firebaseapp.com",
    // })
  }
}
