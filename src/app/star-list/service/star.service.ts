import { Injectable } from '@angular/core';
import { PLANETS } from '../../mock';
import { PlanetMock } from '../models/star-list.model';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/service/message.service';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  constructor(private messageService: MessageService) {}
  getPlanets(): Observable<PlanetMock[]> {
    const planets = of(PLANETS);
    this.messageService.add('StarService: fetched planets');
    return planets;
  }
}

// of(PLANETS) возвращает объект Observable<PlanetMock[]>,
// который выдает одно значение — массив фиктивных планет.