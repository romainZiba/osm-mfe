import { Component, Input } from '@angular/core';
import { MovieModel } from '../../entities/movie.model';

@Component({
  selector: 'mov-movie',
  templateUrl: './movie.component.html',
  styleUrls: [],
})
export class MovieComponent {
  @Input() movie: MovieModel | null = null;
}
