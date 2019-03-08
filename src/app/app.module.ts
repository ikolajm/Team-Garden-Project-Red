import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayPlantComponent,
    AuthComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    AppRoutingModule,
    
  ],
  providers: [HttpClient, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

