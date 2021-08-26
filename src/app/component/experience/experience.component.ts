import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: [
    `
      .star {
        font-size: 1.5rem;
        color: #b0c4de;
      }
      .filled {
        color: #1e90ff;
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
export class ExperienceComponent implements OnInit {
  currentRate = 8;
  currentRate2 = 2;
  selected = 0;
  hovered = 0;
  readonly = false;
  // for form integration
  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
  list:any=null;
  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.findall();
    
  }

  findall(){
    this.experienceService.findall().subscribe(data => {this.list = data});
    this.list.sort((a:Experience, b:Experience) => (a.rating < b.rating) ? 1 : -1)
    console.log(this.list)
  }




  }


