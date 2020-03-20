import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'information-timeline',
  templateUrl: './information-timeline.component.html',
  styleUrls: ['./information-timeline.component.css']
})
export class InformationTimelineComponent implements OnInit {

  @Input('details') details;
  @Input('title') title;

  constructor() { }

  ngOnInit() {
    console.log(this.details);
  }

}
