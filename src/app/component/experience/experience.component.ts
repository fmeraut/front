import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Expcomment } from 'src/app/model/expcomment';
import { Experience } from 'src/app/model/experience';
import { ExpcommentService } from 'src/app/services/expcomment.service';
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
<<<<<<< HEAD
  
  // commentaires
  expCommentExtra:any = null;
  expComment: Expcomment = new Expcomment();

  constructor(private experienceService:ExperienceService, 
    private expcommentService: ExpcommentService) { }
=======
  constructor(private experienceService:ExperienceService,private router: Router) { }
>>>>>>> 66dbcaa05b59b2ca6f8037cb5b8d3cf837b1b479

  ngOnInit(): void {
    this.findall();
    this.findAllComments();
  }

  ratingorder(list:Observable<any>){
  
  }

  findall(){
    this.experienceService.findall().subscribe(data => {this.list = data});
  }

  findcountry(country:string){
    this.experienceService.findcountry(country).subscribe(data => {this.list = data});
  }

<<<<<<< HEAD
  // fonctions liées aux commentaires
  findAllComments(){
    this.expcommentService.findAll().subscribe(data => {this.expCommentExtra = data});
  }

  deleteComment(id : number){
    this.expcommentService.delete(id).subscribe(
      () => {this.findAllComments()}
    )
  }
=======
  getExperience(experience:Experience){
    localStorage.removeItem("expId");
    localStorage.setItem("expId",experience.id.toString());
    this.router.navigate(['/component/oneExperience',experience.id]);
  }

>>>>>>> 66dbcaa05b59b2ca6f8037cb5b8d3cf837b1b479

  saveComment(){
    this.expcommentService.save(this.expComment).subscribe(
      () => {this.findAllComments();
      this.expComment = new Expcomment();
    }
    )
  }

}


