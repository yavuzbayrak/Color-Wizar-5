import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./common.css']

})
export class PersonalComponent implements OnInit {
  model: any = {};

  constructor(public appComponent:AppComponent) { }

  ngOnInit(): void {
  }



}
