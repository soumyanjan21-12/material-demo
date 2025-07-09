import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Circles } from './circles';

describe('Circles', () => {
  let component: Circles;
  let fixture: ComponentFixture<Circles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Circles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Circles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
