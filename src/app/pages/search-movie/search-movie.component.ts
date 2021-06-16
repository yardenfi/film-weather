import {Component} from '@angular/core';
import {ISearchMovieDetails} from "../../models/movie/search-movie-details.interface";
import {MoviesService} from "../../services/movies/movies.service";
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, flatMap, map, mergeMap, tap} from "rxjs/operators";
import {ISearchMoviesResults} from "../../models/movie/search-movies-results.interface";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {
  model: any;
  searching = false;

  resultFormatter = (result: ISearchMovieDetails) => result.Title;

  constructor(private moviesService: MoviesService, private router: Router) {}

  search: OperatorFunction<string, ISearchMovieDetails[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    tap(() => this.searching = true),
    flatMap<string, Observable<ISearchMoviesResults>>(term => this.moviesService.searchMovies({search: term})),
    map<ISearchMoviesResults, ISearchMovieDetails[]>(results => {
      if (results.Search) {
        return results.Search
      }

      return []
    }),
    tap(() => this.searching = false)
  );

  navigateToMovie($event: NgbTypeaheadSelectItemEvent<ISearchMovieDetails>) {
    this.router.navigate(["movies", $event.item.imdbID]);
  }
}
