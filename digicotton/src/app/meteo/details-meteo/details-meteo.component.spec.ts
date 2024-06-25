import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMeteoComponent } from './details-meteo.component';

describe('DetailsMeteoComponent', () => {
  let component: DetailsMeteoComponent;
  let fixture: ComponentFixture<DetailsMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
