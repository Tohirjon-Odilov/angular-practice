import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSystem } from './crm-system';

describe('CrmSystem', () => {
  let component: CrmSystem;
  let fixture: ComponentFixture<CrmSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmSystem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmSystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
