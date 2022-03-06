import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieComponent } from './feature-display/movie-component/movie.component';
import { MoviesComponent } from './feature-display/movies-component/movies.component';
import { MoviesRoutingModule } from './movies.routing.module';

@NgModule({
  imports: [CommonModule, MoviesRoutingModule],
  declarations: [MoviesComponent, MovieComponent],
})
export class MoviesModule {}
