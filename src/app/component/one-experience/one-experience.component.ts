import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-one-experience',
  templateUrl: './one-experience.component.html',
  styles: [
    `
      .star {
        font-size: 1.5rem;
        color: #b0c4de;
      }
      .filled {
        color: #FFFF00;
      }
      .heart {
        position: relative;
        display: inline-block;
        font-size: 3rem;
        color: #d3d3d3;
      }
      .full {
        color: red;
      }
      .half {
        position: absolute;
        display: inline-block;
        overflow: hidden;
        color: red;
      }
    `
  ]
})
export class OneExperienceComponent implements OnInit {

  experience:any;
  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
    
    let expId = localStorage.getItem("expId");
    if(expId!=null){
    
    this.experienceService.findone(+expId).subscribe(data => {this.experience=data});
  }
  }

 
}
