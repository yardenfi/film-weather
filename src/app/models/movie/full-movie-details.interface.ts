import {IMovieRating} from "./movie-rating.interface";

export interface IFullMovieDetails {
  Rated: string;
  Released: string;
  Runtime: string
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: IMovieRating[],
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
