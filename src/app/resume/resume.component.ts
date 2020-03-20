import { ResumeService } from './../services/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume;  

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResume()
      .subscribe(data => {
        this.resume = data;
      })
  }

}
