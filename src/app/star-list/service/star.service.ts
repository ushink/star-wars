import { Injectable, inject } from '@angular/core';
import { Planet, PlanetsList } from '../models/star-list.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  private apiUrl = 'https://swapi.dev/api/';
  private http = inject(HttpClient);

  getPlanets(): Observable<PlanetsList> {
    return this.http.get<PlanetsList>(`${this.apiUrl}planets/`);
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}planets/${id}`);
  }
}
