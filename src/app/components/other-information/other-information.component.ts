import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.css']
})
export class OtherInformationComponent implements OnInit {
  @Input('resume') resume;
  constructor() { }

  ngOnInit() {
  }

}
