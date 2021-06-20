import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies/movies.service";
import {IFullMovieDetails} from "../../models/movie/full-movie-details.interface";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  public movie?: IFullMovieDetails;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.params["movieId"];
    this.moviesService.getMovie(movieId).subscribe(movie => {
      this.movie = movie;
    });
  }
}
