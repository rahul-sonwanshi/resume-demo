import { ResumeService } from './services/resume.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { InformationTimelineComponent } from './components/information-timeline/information-timeline.component';
import { AchievementsTimelineComponent } from './components/achievements-timeline/achievements-timeline.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { OtherInformationComponent } from './components/other-information/other-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    InformationTimelineComponent,
    AchievementsTimelineComponent,
    SkillsComponent,
    OtherInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
