import { Component, OnInit, inject } from '@angular/core';
import { PlanetMock } from '../star-list/models/star-list.model';
import { NgIf, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StarService } from '../star-list/service/star.service';

@Component({
  selector: 'app-star-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './star-detail.component.html',
  styleUrl: './star-detail.component.css',
})
export class StarDetailComponent implements OnInit {
  planet: PlanetMock | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  private starService = inject(StarService);

  ngOnInit(): void {
    this.getPlanet();
  }

  getPlanet(): void {
    const name = String(this.route.snapshot.paramMap.get('id'));

    this.starService
      .getPlanet(name)
      .subscribe((planet) => (this.planet = planet));
  }

  goBack(): void {
    this.location.back();
  }
}
