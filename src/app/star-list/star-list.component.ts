import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { PlanetMock } from './models/star-list.model';
import { StarService } from './service/star.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-star-list',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, RouterLink],
  templateUrl: './star-list.component.html',
  styleUrl: './star-list.component.css',
})
export class StarListComponent implements OnInit {
  planets: PlanetMock[] = [];

  // constructor(private starService: StarService) {}
  private starService = inject(StarService);

  // перехватчик жизненного цикла ngOnInit
  ngOnInit(): void {
    this.getPlanets();
  }
  // метод для получения данных из сервиса
  getPlanets(): void {
    this.starService
      .getPlanets()
      .subscribe((planets) => (this.planets = planets)); // Observable.subscribe()это критическая разница
  }
}
