import { Component, Input } from '@angular/core';
import { PlanetMock } from '../star-list/models/star-list.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-star-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './star-detail.component.html',
  styleUrl: './star-detail.component.css',
})
export class StarDetailComponent {
  @Input() planet?: PlanetMock;
}
