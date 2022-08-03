import { Elenco } from './../../shared/models/Elenco';
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
  elenco!: Elenco[];

  constructor(private activeRouter: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
   this.idFilme = this.activeRouter.snapshot.params['id'];
   this.getMovie(this.idFilme);
   this.getElenco(this.idFilme);
  }

  getMovie(id: number){
    this.movieService.getMovie(id).subscribe( res=> {
      this.movie = res;
     });
  }

  getElenco(id: number) {
    this.movieService.getCredits(id).subscribe(res => {
      this.elenco = res.cast;
      console.log(this.elenco);
    });
  }

}
