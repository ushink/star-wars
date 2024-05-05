import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { PlanetMock } from './models/star-list.model';
import { StarDetailComponent } from '../star-detail/star-detail.component';
import { StarService } from './service/star.service';
import { MessageService } from '../messages/service/message.service';

@Component({
  selector: 'app-star-list',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, StarDetailComponent],
  templateUrl: './star-list.component.html',
  styleUrl: './star-list.component.css',
})
export class StarListComponent {
  planets: PlanetMock[] = [];

  constructor(
    private starService: StarService,
    private messageService: MessageService
  ) {}

  // метод для получения данных из сервиса
  getPlanets(): void {
    this.starService
      .getPlanets()
      .subscribe((planets) => (this.planets = planets)); // Observable.subscribe()это критическая разница
  }

  // перехватчик жизненного цикла ngOnInit
  ngOnInit(): void {
    this.getPlanets();
  }

  selectedPlanet?: PlanetMock;
  onSelect(planet: PlanetMock, event: Event): void {
    event.stopPropagation();
    this.selectedPlanet = planet;
    this.messageService.add(`Selected planet ${planet.name}`);
  }
}
