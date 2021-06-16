import { Component } from '@angular/core';
import {MoviesService} from "./services/movies/movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private moviesService: MoviesService) {
    this.moviesService.searchMovie({
      search: "are"
    }).subscribe(console.log);
  }
}
