import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadItemComponent } from './team-lead-item.component';

describe('TeamLeadItemComponent', () => {
  let component: TeamLeadItemComponent;
  let fixture: ComponentFixture<TeamLeadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLeadItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
