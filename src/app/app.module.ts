import { ActivityService } from './services/ActivityService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
