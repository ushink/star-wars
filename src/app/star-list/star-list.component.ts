import { Component } from '@angular/core';
import { PLANETS } from '../mock';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { PlanetMock } from './models/star-list.model';

@Component({
  selector: 'app-star-list',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe],
  templateUrl: './star-list.component.html',
  styleUrl: './star-list.component.css',
})
export class StarListComponent {
  planets = PLANETS;

  selectedPlanet?: PlanetMock;
  onSelect(planet: PlanetMock, event: Event): void {
    event.stopPropagation();
    this.selectedPlanet = planet;
    console.log('planet', planet.name);
  }
}
