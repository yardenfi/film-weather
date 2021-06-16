import { Component, OnInit } from '@angular/core';
import {ISearchMovieDetails} from "../../models/movie/search-movie-details.interface";
import {MoviesService} from "../../services/movies/movies.service";
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, flatMap, map, mergeMap, tap} from "rxjs/operators";
import {ISearchMoviesResults} from "../../models/movie/search-movies-results.interface";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {
  model: any;
  searching = false;
  searchFailed = false;
  constructor(private moviesService: MoviesService) {

  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      flatMap<string, Observable<ISearchMoviesResults>>(term => this.moviesService.searchMovies({search: term})),
      map<ISearchMoviesResults, string[]>(results => {
        if (results.Search) {
          return results.Search.map(result => result.Title)
        }

        return []
      }),
      tap(() => this.searching = false)
    )
}
