import { IMovie } from './../../shared/models/Movie';
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
  elencoTotal!: Elenco[];
  elencoParcial!: Elenco[];
  recommendations!: IMovie[];
  recommendationsParcial!: IMovie[];
  isShowAllElenco: boolean = false;
  isShowRecommendations: boolean = false;

  constructor(private activeRouter: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
   this.idFilme = this.activeRouter.snapshot.params['id'];
   this.activeRouter.params.subscribe(params => {
    let idTemporario;
    idTemporario = params['id'];
    if(this.idFilme != idTemporario) {
      this.idFilme = idTemporario;
      window.location.reload();
    }
   })
   this.getMovie(this.idFilme);
   this.getElenco(this.idFilme);
   this.getRecommendations(this.idFilme);
  }

  getMovie(id: number){
    this.movieService.getMovie(id).subscribe( res=> {
      this.movie = res;
     });
  }

  getElenco(id: number) {
    this.movieService.getCredits(id).subscribe(res => {
      this.elencoTotal = res.cast;
      this.elencoParcial = res.cast.slice(0,5);
    });
  }

  getRecommendations(id: number) {
    this.movieService.getRecommendations(id).subscribe(res => {
      this.recommendations = res.results;
      this.recommendationsParcial = res.results.slice(0,5);
    });
  }

  showAll(show: number) {
    this.isShowAllElenco = !this.isShowAllElenco;
    this.isShowRecommendations = !this.isShowRecommendations;
    if(this.isShowAllElenco && show == 1) {
      this.elencoParcial = this.elencoTotal;
    } else {
      this.elencoParcial = this.elencoTotal.slice(0,5);
    }
    if(this.isShowRecommendations && show == 2) {
      this.recommendationsParcial = this.recommendations;
    } else {
      this.recommendationsParcial = this.recommendations.slice(0,5);
    }
  }

}
