import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
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
export class ExperienceDetailComponent implements OnInit {
  selectedFiles!: FileList;
  currentFileUpload: any;
  experience:Experience=new Experience()
  currentRate = 0;
  constructor(private experienceService:ExperienceService) { }
  
  ngOnInit(): void {
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }

  saveExperience(){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.experienceService.save(this.currentFileUpload,this.experience).subscribe(
      () => {this.experience = new Experience();}
    )
  }

}