import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMovieSearchOptions} from "../../models/movie/movie-search-options.interface";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ISearchMovieDetails} from "../../models/movie/search-movie-details.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  searchMovie(options: IMovieSearchOptions): Observable<ISearchMovieDetails[]> {
    const params = new HttpParams()
      .append("s", options.search)
      .append("apikey", "dce24c91");
    return this.http.get<ISearchMovieDetails[]>(environment.omdbUrl, {
      params,
      responseType: "json"
    });
  }
}