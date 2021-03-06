import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import {FormsModule} from "@angular/forms";
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { WeatherPreviewComponent } from './pages/movie-page/weather-preview/weather-preview.component';
import {WeatherService} from "./services/weather/weather.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbTypeaheadModule,
  ],
  declarations: [
    AppComponent,
    SearchMovieComponent,
    MoviePageComponent,
    WeatherPreviewComponent,
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
