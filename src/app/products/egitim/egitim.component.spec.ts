import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgitimComponent } from './egitim.component';

describe('EgitimComponent', () => {
  let component: EgitimComponent;
  let fixture: ComponentFixture<EgitimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgitimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
