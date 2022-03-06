import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MovieModel } from '../entities/movie.model';

@Injectable({ providedIn: 'root' })
export class MoviesDataService {
  private fakeMovies: readonly MovieModel[] = [
    {
      id: '1',
      title: 'Movie 1',
      releaseDate: new Date(2009, 4, 1),
      imgSrc: '',
    },
    {
      id: '2',
      title: 'Movie 2',
      releaseDate: new Date(1998, 4, 1),
      imgSrc: '',
    },
  ];

  getMovies(): Observable<readonly MovieModel[]> {
    return of(this.fakeMovies).pipe(delay(Math.random()));
  }
}
