import {IMovieRating} from "./movie-rating.interface";
import {IMovieSearchOptions} from "./movie-search-options.interface";
import {ISearchMovieDetails} from "./search-movie-details.interface";

export interface IFullMovieDetails extends ISearchMovieDetails {
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
