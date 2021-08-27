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
