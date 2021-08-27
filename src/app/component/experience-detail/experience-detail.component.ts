import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  experience:Experience=new Experience()
  currentRate = 0;
  constructor(private experienceService:ExperienceService) { }
  
  ngOnInit(): void {
  }

  saveExperience(){
    this.experienceService.saveExperience(this.experience).subscribe(
      () => {this.experience = new Experience();}
    )
  }

}
