import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPlantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [HttpClient, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// this is a git test


//this is a second test

// This is a comment from Jake