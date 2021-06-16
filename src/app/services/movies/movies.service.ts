import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMovieSearchOptions} from "../../models/movie/movie-search-options.interface";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ISearchMovieDetails} from "../../models/movie/search-movie-details.interface";
import {ISearchMoviesResults} from "../../models/movie/search-movies-results.interface";
import {IFullMovieDetails} from "../../models/movie/full-movie-details.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  searchMovies(options: IMovieSearchOptions): Observable<ISearchMoviesResults> {
    const params = new HttpParams()
      .append("s", options.search)
      .append("apikey", "dce24c91");
    return this.http.get<ISearchMoviesResults>(environment.omdbUrl, {
      params,
      responseType: "json"
    });
  }

  getMovie(movieId: string): Observable<IFullMovieDetails> {
    const params = new HttpParams()
      .append("i", movieId)
      .append("apikey", "dce24c91");
    return this.http.get<IFullMovieDetails>(environment.omdbUrl, {
      params,
      responseType: "json"
    });
  }
}
