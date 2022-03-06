import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../../entities/movie.model';
import { MoviesDataService } from '../../infrastructure/movies.data.service';

@Component({
  selector: 'mov-list',
  templateUrl: './movies.component.html',
  styleUrls: [],
})
export class MoviesComponent {
  movies$: Observable<readonly MovieModel[]> = this.moviesService.getMovies();

  constructor(private readonly moviesService: MoviesDataService) {}
}
