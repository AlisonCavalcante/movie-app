import { IMovie } from './../shared/models/Movie';
import { Constantes } from './../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getUpcomingMovies(page: number): Observable<any>{
    return this.http.get<any>(Constantes.URL_BASE + 'upcoming?api_key=' + Constantes.API_KEY + `&page=${page}`);
  }

  getMovie(id: number): Observable<any>{
    return this.http.get<any>(Constantes.URL_BASE + `${id}?api_key=${Constantes.API_KEY}&language=en-US`);
  }

  getGenres(): Observable<any>{
    return this.http.get<any>(Constantes.URL_GENRES + `${Constantes.API_KEY}`)
  }


}
