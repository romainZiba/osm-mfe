import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './feature-display/movies-component/movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MoviesRoutingModule {}
