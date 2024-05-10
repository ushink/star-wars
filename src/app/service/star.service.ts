import { Injectable, inject } from '@angular/core';
import { Planet, PlanetsList } from '../models/star-list.model';
import { Observable, catchError, forkJoin, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Residents } from '../models/star-detail.model';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  private apiUrl = 'https://swapi.dev/api/';
  private http = inject(HttpClient);

  getPlanets(page: number): Observable<PlanetsList> {
    return this.http
      .get<PlanetsList>(`${this.apiUrl}planets/?page=${page}`)
      .pipe(
        catchError(this.handleError<PlanetsList>(`getPlanets page=${page}`))
      );
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http
      .get<Planet>(`${this.apiUrl}planets/${id}`)
      .pipe(catchError(this.handleError<Planet>(`getPlanet id=${id}`)));
  }

  getResidents(urls: string[] | null): Observable<Residents[]> {
    if (!urls) {
      return new Observable<Residents[]>();
    }
    return forkJoin(urls.map((url) => this.http.get<Residents>(url))).pipe(
      catchError(this.handleError<Residents[]>(`getResidents, [] `))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
