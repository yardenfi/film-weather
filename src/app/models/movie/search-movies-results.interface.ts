import {ISearchMovieDetails} from "./search-movie-details.interface";

export interface ISearchMoviesResults {
  Search: ISearchMovieDetails[];
  totalResults: string
}
