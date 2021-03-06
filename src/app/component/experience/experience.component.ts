import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AppService} from 'src/app/app.service';
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

      .card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border:double;
        
      }

      .body{
        background-color: #FBEEEB;
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
  top:any=null;
  countryList=null;
  constructor(private experienceService:ExperienceService,private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.findvalidated();
    this.findtop4();
    this.findCountryList();
  }

  ratingorder(list:Observable<any>){
  
  }

  findall(){
    this.experienceService.findall().subscribe(data => {this.list = data});
  }

  findcountry(country:string){
    this.experienceService.findcountry(country).subscribe(data => {this.list = data});
  }

  findtop(){
    this.experienceService.findtop().subscribe(data => {this.list = data});
  }

  findtop4(){
    this.experienceService.findtop4().subscribe(data => {this.top = data});
  }

  findCountryList(){
    this.experienceService.findCountryList().subscribe(data => {this.countryList = data});
  }

  getExperience(experience:Experience){
    localStorage.removeItem("expId");
    localStorage.setItem("expId",experience.id.toString());
    this.router.navigate(['/component/oneExperience',experience.id]);
  }

  findvalidated(){
    this.experienceService.findvalidated().subscribe(data => {this.list = data});
  }

  authenticated(){
    return this.appService.authenticated;
  }

}


