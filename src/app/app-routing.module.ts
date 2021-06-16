import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchMovieComponent} from "./pages/search-movie/search-movie.component";
import {MoviePageComponent} from "./pages/movie-page/movie-page.component";

const routes: Routes = [
  {
    path: "",
    component: SearchMovieComponent
  },
  {
    path: "movies/:movieId",
    component: MoviePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
