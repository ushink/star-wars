import { Injectable, inject } from '@angular/core';
import { PLANETS } from '../../mock';
import { Planet, PlanetMock, PlanetsList } from '../models/star-list.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  // constructor(private messageService: MessageService) {}

  private apiUrl = 'https://swapi.dev/api/';
  private http = inject(HttpClient);

  getPlanets(): Observable<PlanetsList> {
    return this.http.get<PlanetsList>(`${this.apiUrl}planets/?page=2`);
  }
 
  getPlanet(name: string): Observable<PlanetMock> {
    const planet = PLANETS.find((planet) => planet.name === name)!;
    return of(planet);
  }
}

// of(PLANETS) возвращает объект Observable<PlanetMock[]>,
// который выдает одно значение — массив фиктивных планет.
