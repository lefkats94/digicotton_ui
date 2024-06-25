import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPolygonsComponent } from './user-polygons.component';

describe('UserPolygonsComponent', () => {
  let component: UserPolygonsComponent;
  let fixture: ComponentFixture<UserPolygonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPolygonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPolygonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
