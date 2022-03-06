import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOVIES } from './routes';

@Component({
  selector: 'osm-shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  movies = MOVIES;
}
