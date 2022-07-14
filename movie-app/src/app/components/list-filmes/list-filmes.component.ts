import { IMovie } from './../../shared/models/Movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrls: ['./list-filmes.component.css']
})
export class ListFilmesComponent implements OnInit {

  listMovies!: IMovie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe(res => {
      this.listMovies = res.results;
      console.log(this.listMovies)
    });
  }

}
