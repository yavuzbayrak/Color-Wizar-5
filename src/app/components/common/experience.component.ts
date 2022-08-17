import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls:["./common.css"]

})
export class ExperienceComponent implements OnInit {

  constructor(public appComponent:AppComponent) { }

  ngOnInit(): void {
  }

}
