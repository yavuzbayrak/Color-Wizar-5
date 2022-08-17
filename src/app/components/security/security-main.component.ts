import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BodyComponent } from '../common/body.component';
import { EducationComponent } from '../common/education.component';
import { HealthComponent } from '../common/health.component';
import { PersonalComponent } from '../common/personal.component';

@Component({
  selector: 'app-security-main',
  templateUrl: './security-main.component.html',
  styleUrls:['./security-main.css']
})
export class SecurityMainComponent implements OnInit {




  ngOnChanges(changes: SimpleChanges): void {

  }



  constructor() {
   }

  ngOnInit(): void {

  }

}
