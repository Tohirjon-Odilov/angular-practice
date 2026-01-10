import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOperations } from './math-operations';

describe('MathOperations', () => {
  let component: MathOperations;
  let fixture: ComponentFixture<MathOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathOperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
