import { Component, OnInit } from '@angular/core';
import { Expcomment } from 'src/app/model/expcomment';
import { ExpcommentService } from 'src/app/services/expcomment.service';
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
 
  // commentaires
  expCommentExtra:any = null;
  expComment: Expcomment = new Expcomment();

  constructor(private experienceService:ExperienceService,private expcommentService: ExpcommentService) { }

  ngOnInit(): void {
    
    let expId = localStorage.getItem("expId");
    if(expId!=null){
    
    this.experienceService.findone(+expId).subscribe(data => {this.experience=data});
    this.findByExperience(+expId);
    this.expComment.experience.id=+expId;
  }
  }

  // fonctions liées aux commentaires
  findByExperience(id : number){
    this.expcommentService.findByExperience(id).subscribe(data => {this.expCommentExtra = data});
  }

  deleteComment(id : number){
    this.expcommentService.delete(id).subscribe(
      () => {this.findByExperience(this.experience.id)}
    )
  }

  saveComment(){
    this.expcommentService.save(this.expComment).subscribe(
      () => {this.findByExperience(this.experience.id);
      this.expComment = new Expcomment();
    }
    )
  }

 
}
