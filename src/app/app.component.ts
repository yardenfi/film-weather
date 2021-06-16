import { Component } from '@angular/core';
import {MoviesService} from "./services/movies/movies.service";
import {ISearchMovieDetails} from "./models/movie/search-movie-details.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public results: ISearchMovieDetails[] = [];

  constructor(private moviesService: MoviesService) {
    this.moviesService.searchMovies({
      search: "are"
    }).subscribe(r => this.results = r.Search);
  }
}
