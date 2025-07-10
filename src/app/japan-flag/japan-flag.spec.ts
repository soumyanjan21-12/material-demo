import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanFlag } from './japan-flag';

describe('JapanFlag', () => {
  let component: JapanFlag;
  let fixture: ComponentFixture<JapanFlag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JapanFlag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapanFlag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
