import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'achievements-timeline',
  templateUrl: './achievements-timeline.component.html',
  styleUrls: ['./achievements-timeline.component.css']
})
export class AchievementsTimelineComponent implements OnInit {
  @Input('details') details;
  @Input('title') title;

  constructor() { }

  ngOnInit() {
  }

}
