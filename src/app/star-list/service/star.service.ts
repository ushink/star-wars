import { Injectable } from '@angular/core';
import { PLANETS } from '../../mock';
import { PlanetMock } from '../models/star-list.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  constructor() {}
  getPlanets(): Observable<PlanetMock[]> {
    const planets = of(PLANETS);
    return planets;
  }
}

// of(PLANETS) возвращает объект Observable<PlanetMock[]>, 
// который выдает одно значение — массив фиктивных планет.