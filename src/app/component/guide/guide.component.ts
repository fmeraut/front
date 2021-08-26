import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-ngbd-rating',
  templateUrl: './guide.component.html',
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
export class GuideComponent implements OnInit {
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

  guideExtra : any = null;

  results = [];
  

  constructor(private guideService : GuideService ) { }

  ngOnInit(): void {
  }

  findAllGuides(){
    this.guideService.findAllGuides().subscribe(data => {this.guideExtra = data});
    console.log(this.guideExtra);
  }

  

  

  

 

}
