import { Component, OnInit, inject } from '@angular/core';
import { Planet } from '../models/star-list.model';
import { NgIf, Location, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StarService } from '../service/star.service';
import { Residents } from '../models/star-detail.model';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-star-detail',
  standalone: true,
  imports: [NgIf, NgFor, MatSelectModule, MatButtonModule],
  templateUrl: './star-detail.component.html',
  styleUrl: './star-detail.component.css',
})
export class StarDetailComponent implements OnInit {
  isLoading: boolean = false;
  planet: Planet | undefined;
  urls!: string[] | null;
  residents: Residents[] | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  private starService = inject(StarService);

  ngOnInit(): void {
    this.getPlanet();
  }
  getPlanet(): void {
    this.isLoading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.starService.getPlanet(id).subscribe({
      next: (planet) => {
        this.planet = planet;
        this.urls = planet.residents;
        this.getResidents();
        this.isLoading = false;
      },
      error: (err) => console.error('Error fetching planet:', err),
    });
  }

  getResidents(): void {
    this.starService.getResidents(this.urls).subscribe({
      next: (residents) => {
        this.residents = residents;
      },
      error: (err) => console.error('Error fetching residents:', err),
    });
  }

  goBack(): void {
    this.location.back();
  }

  handleSort(gender: any): void {
    this.residents?.sort((a, b) => {
      if (a.gender === gender.value) return -1;
      if (b.gender === gender.value) return 1;
      return 0;
    });
  }
}
