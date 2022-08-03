import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css']
})
export class FilmeDetalhesComponent implements OnInit {

  idFilme!: number;
  movie: any;
  constructor(private activeRouter: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
   this.idFilme = this.activeRouter.snapshot.params['id'];
   this.getMovie(this.idFilme);
  }

  getMovie(id: number){
    this.movieService.getMovie(id).subscribe( res=> {
      this.movie = res;
      console.log(this.movie)
     });
  }

}
