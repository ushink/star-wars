import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Planet } from '../models/star-list.model';
import { StarService } from '../service/star.service';
import { RouterLink } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-star-list',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, RouterLink, MatPaginatorModule],
  templateUrl: './star-list.component.html',
  styleUrl: './star-list.component.css',
})
export class StarListComponent implements OnInit {
  planets: Planet[] = [];
  page: number = 1;

  private starService = inject(StarService);

  // перехватчик жизненного цикла ngOnInit
  ngOnInit(): void {
    this.getPlanets();
  }
  getPlanets(event?: PageEvent): void {
    this.page = event ? event.pageIndex + 1 : this.page;

    this.starService.getPlanets(this.page).subscribe(
      (planets) =>
        (this.planets = planets.results.map((el, index) => ({
          ...el,
          id: (this.page - 1) * 10 + index + 1,
        })))
    );
  }
}
