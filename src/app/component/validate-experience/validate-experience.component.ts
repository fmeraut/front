import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-validate-experience',
  templateUrl: './validate-experience.component.html',
  styleUrls: ['./validate-experience.component.css']
})
export class ValidateExperienceComponent implements OnInit {

  list:any;
  constructor(private experienceService:ExperienceService,private router: Router) { }

  ngOnInit(): void {
    this.findUnvalidated();
  }

  findUnvalidated(){
    this.experienceService.findUnvalidated().subscribe(data => {this.list = data});
  }

  validate(id:number){
    this.experienceService.validate(id).subscribe(
      () => {this.findUnvalidated()}
      );
  }

  delete(id:number){
    this.experienceService.delete(id).subscribe(
      () => {this.findUnvalidated()}
      );
  }

  getExperience(experience:Experience){
    localStorage.removeItem("expId");
    localStorage.setItem("expId",experience.id.toString());
    this.router.navigate(['/component/oneExperience',experience.id]);
  }
  

}
