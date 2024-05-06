import { Component, OnInit, inject } from '@angular/core';
import { Planet } from '../star-list/models/star-list.model';
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
  planet: Planet | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  private starService = inject(StarService);

  ngOnInit(): void {
    this.getPlanet();
  }

  getPlanet(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.starService
      .getPlanet(id)
      .subscribe((planet) => (this.planet = planet));
  }

  goBack(): void {
    this.location.back();
  }
}
