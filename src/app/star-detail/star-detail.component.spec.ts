import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDetailComponent } from './star-detail.component';

describe('StarDetailComponent', () => {
  let component: StarDetailComponent;
  let fixture: ComponentFixture<StarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
