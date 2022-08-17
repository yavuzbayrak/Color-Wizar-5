import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls:["./common.css"]

})

export class EducationComponent implements OnInit {

  constructor(public appComponent:AppComponent) { }

  ngOnInit(): void {
  }

}
