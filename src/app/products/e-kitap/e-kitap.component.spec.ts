import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKitapComponent } from './e-kitap.component';

describe('EKitapComponent', () => {
  let component: EKitapComponent;
  let fixture: ComponentFixture<EKitapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EKitapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EKitapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
