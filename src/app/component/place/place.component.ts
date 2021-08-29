import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-ngbd-rating',
  templateUrl: './place.component.html',
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
export class PlaceComponent implements OnInit {
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

  placeExtra : any = null;

  results = [];
  list:any=null;
  top:any=null;
  countryList=null;
  

  constructor(private placeService : PlaceService,private router: Router ) { }

  ngOnInit(): void {
    this.findAllPlaces();
    this.findtop4();
    this.findCountryList();
  }

  findAllPlaces(){
    this.placeService.findAllPlaces().subscribe(data => {this.placeExtra = data});
    console.log(this.placeExtra);
  }

  getPlace(place:Place){
    localStorage.removeItem("placeId");
    localStorage.setItem("placeId",place.id.toString());
    this.router.navigate(['/component/onePlace',place.id]);
  }

  findPlaceBycountry(country:string){
    this.placeService.findPlaceByCountry(country).subscribe(data => {this.list = data});
  }

  findtop(){
    this.placeService.findtop().subscribe(data => {this.list = data});
  }

  findtop4(){
    this.placeService.findtop4().subscribe(data => {this.top = data});
  }

  findCountryList(){
    this.placeService.findCountryList().subscribe(data => {this.countryList = data});
  }

  ratingorder(list:Observable<any>){
  
  }
  

  

  

  

 

}
