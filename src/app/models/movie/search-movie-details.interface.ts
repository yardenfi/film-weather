import {MovieType} from "./movie-type.enum";

export interface ISearchMovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
}

