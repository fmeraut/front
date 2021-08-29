import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {GuideService} from 'src/app/services/guide.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-one-guide',
  templateUrl: './one-guide.component.html',
  styleUrls: ['./one-guide.component.css']
})
export class OneGuideComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  guide:any;

  placesExtra :any = null; 

  constructor(config: NgbCarouselConfig, private guideService:GuideService,
    private placeService: PlaceService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }



  ngOnInit(): void {
    let guideId = localStorage.getItem("guideId");
    if(guideId!=null){
    
    this.guideService.findone(+guideId).subscribe(data => {this.guide=data});
    this.findByGuide(+guideId);
  }
  }

  //fonctions liees aux places
  findByGuide(id:number){
    this.placeService.findByGuide(id).subscribe(data => {this.placesExtra = data});
  }
  }


