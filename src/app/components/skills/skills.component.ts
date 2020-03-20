import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input('skills') skills;
  @Input('title') title;
  constructor() { }

  ngOnInit() {
  }

}
