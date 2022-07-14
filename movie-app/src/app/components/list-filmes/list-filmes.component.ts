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
  page = 1;
  count = 0;
  pageSize = 20;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovies(this.page).subscribe(res => {
      this.listMovies = res.results;
      this.count = res.total_results;
      console.log(this.listMovies)
    });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getUpcomingMovies();
  }

}
