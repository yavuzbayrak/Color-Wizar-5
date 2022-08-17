import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-security-card',
  templateUrl: './security-card.component.html',
  styles: [
  ]
})
export class SecurityCardComponent implements OnInit {

  constructor(public appComponent:AppComponent) { }

  ngOnInit(): void {
  }

}
