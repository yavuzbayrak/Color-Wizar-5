import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleaningMainComponent } from './components/cleaning/cleaning-main.component';
import { BodyComponent } from './components/common/body.component';
import { CommunicationComponent } from './components/common/communication.component';
import { EducationComponent } from './components/common/education.component';
import { ExperienceComponent } from './components/common/experience.component';
import { HealthComponent } from './components/common/health.component';
import { PersonalComponent } from './components/common/personal.component';
import { ReferencesComponent } from './components/common/references.component';
import { SecurityCardComponent } from './components/security/security-card.component';
import { SecurityMainComponent } from './components/security/security-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityMainComponent,
    CleaningMainComponent,
    PersonalComponent,
    EducationComponent,
    CommunicationComponent,
    ReferencesComponent,
    BodyComponent,
    SecurityCardComponent,
    HealthComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
