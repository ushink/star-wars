import { Component, OnInit, inject } from '@angular/core';
import { Planet } from '../models/star-list.model';
import { NgIf, Location, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StarService } from '../service/star.service';
import { Residents } from '../models/star-detail.model';

@Component({
  selector: 'app-star-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './star-detail.component.html',
  styleUrl: './star-detail.component.css',
})
export class StarDetailComponent implements OnInit {
  planet: Planet | undefined;
  urls!: string[] | null;
  residents: Residents[] | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  private starService = inject(StarService);

  ngOnInit(): void {
    this.getPlanet();
    this.getResidents();
  }

  getPlanet(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.starService.getPlanet(id).subscribe((planet) => {
      this.planet = planet;
      this.urls = planet.residents;
    });
  }

  getResidents(): void {
    this.starService
      .getResidents(this.urls)
      .subscribe((residents) => (this.residents = residents));
  }

  goBack(): void {
    this.location.back();
  }

  handleSort(gender: any): void {
    this.residents?.sort((a, b) => {
      if (a.gender === gender.target.value.toLocaleLowerCase()) return -1;
      if (b.gender === gender.target.value.toLocaleLowerCase()) return 1;
      return 0;
    });
  }
}
