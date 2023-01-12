import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoclukComponent } from './kocluk.component';

describe('KoclukComponent', () => {
  let component: KoclukComponent;
  let fixture: ComponentFixture<KoclukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoclukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoclukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
