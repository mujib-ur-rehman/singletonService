import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingletonserviceService } from './singletonservice.service';

import { ReactiveFormsModule } from '@angular/forms';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    CollegeComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [SingletonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  public static singletonservice = new SingletonserviceService();
}
