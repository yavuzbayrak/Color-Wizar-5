import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./common.css']

})
export class HealthComponent implements OnInit {

  constructor(public appComponent:AppComponent) { }

  items=[
    {id:1, diseaseName:"Görme" ,ratio:"%40"},
    {id:2, diseaseName:"İşitme" ,ratio:"%65"},
    {id:3, diseaseName:"Ortapedik" ,ratio:"%20"}
  ]

  ngOnInit(): void {
  }

}
