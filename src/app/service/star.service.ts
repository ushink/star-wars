import { Injectable, inject } from '@angular/core';
import { Planet, PlanetsList } from '../models/star-list.model';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Residents } from '../models/star-detail.model';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  private apiUrl = 'https://swapi.dev/api/';
  private http = inject(HttpClient);

  getPlanets(page: number): Observable<PlanetsList> {
    return this.http.get<PlanetsList>(`${this.apiUrl}planets/?page=${page}`);
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}planets/${id}`);
  }

  getResidents(urls: string[] | null): Observable<Residents[]> {
    if (!urls) {
      return new Observable<Residents[]>();
    }
    return forkJoin(urls.map((url) => this.http.get<Residents>(url)));
  }
}
