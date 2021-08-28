import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/model/guide';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.component.html',
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
export class GuideDetailComponent implements OnInit {
  selectedFiles!: FileList;
  currentFileUpload: any;
  guide:Guide=new Guide()
  currentRate = 0;
  constructor(private guideService:GuideService) { }
  
  ngOnInit(): void {
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }

  saveGuide(){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.guideService.save(this.currentFileUpload,this.guide).subscribe(
      () => {this.guide = new Guide();}
    )
  }

}