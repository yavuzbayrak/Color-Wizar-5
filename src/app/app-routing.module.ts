import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/common/body.component';
import { CommunicationComponent } from './components/common/communication.component';
import { EducationComponent } from './components/common/education.component';
import { ExperienceComponent } from './components/common/experience.component';
import { HealthComponent } from './components/common/health.component';
import { PersonalComponent } from './components/common/personal.component';
import { ReferencesComponent } from './components/common/references.component';

const routes: Routes = [
  {path:"", component:PersonalComponent},
  {path:"saglik", component:HealthComponent},
  {path:"beden", component:BodyComponent},
  {path:"egitim", component:EducationComponent},
  {path:"iletisim", component:CommunicationComponent},
  {path:"deneyim", component:ExperienceComponent},
  {path:"referans", component:ReferencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
