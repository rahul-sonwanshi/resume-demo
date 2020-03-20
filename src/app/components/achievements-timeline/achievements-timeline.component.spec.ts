import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsTimelineComponent } from './achievements-timeline.component';

describe('AchievementsTimelineComponent', () => {
  let component: AchievementsTimelineComponent;
  let fixture: ComponentFixture<AchievementsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
