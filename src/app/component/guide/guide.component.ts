import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from 'src/app/app.service';
import {Guide} from 'src/app/model/guide';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-ngbd-rating',
  templateUrl: './guide.component.html',
  styles: [
    `
    .card{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border:double;
      
    }

    .body{
      background-color: #FBEEEB;
    }
      
    `
  ],
  styleUrls:['./guide.component.css']
  
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

  
  list:any=null;
  top:any=null;
  countryList=null;
  

  constructor(private guideService : GuideService, private router: Router, private appService: AppService ) { }

  ngOnInit(): void {
    this.findvalidated();
    this.findtop4();
    this.findCountryList();
  }

 
  findAllGuides(){
    this.guideService.findAllGuides().subscribe(data => {this.list = data});
    
  }

  findcountry(country:string){
    this.guideService.findcountry(country).subscribe(data => {this.list = data});
  }

  getGuide(guide:Guide){
    localStorage.removeItem("guideId");
    localStorage.setItem("guideId",guide.id.toString());
    localStorage.removeItem("guideCountry");
    localStorage.setItem("guideCountry",guide.country);
    this.router.navigate(['/component/oneGuide',guide.id]);
  }

  findvalidated(){
    this.guideService.findvalidated().subscribe(data => {this.list = data});
  }

  ratingorder(list:Observable<any>){
  
  }

  findtop(){
    this.guideService.findtop().subscribe(data => {this.list = data});
  }

  findtop4(){
    this.guideService.findtop4().subscribe(data => {this.top = data});
  }

  findCountryList(){
    this.guideService.findCountryList().subscribe(data => {this.countryList = data});
  }

  authenticated(){
    return this.appService.authenticated;
  }
  

  

  

 

}
