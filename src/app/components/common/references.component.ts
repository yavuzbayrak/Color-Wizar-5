import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls:["./common.css"]
})
export class ReferencesComponent implements OnInit {

  constructor(public appComponent:AppComponent) { }

  ngOnInit(): void {
  }

}
