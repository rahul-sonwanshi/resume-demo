import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTimelineComponent } from './information-timeline.component';

describe('InformationTimelineComponent', () => {
  let component: InformationTimelineComponent;
  let fixture: ComponentFixture<InformationTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
