import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadKmlComponent } from './upload-kml.component';

describe('UploadKmlComponent', () => {
  let component: UploadKmlComponent;
  let fixture: ComponentFixture<UploadKmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadKmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadKmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
