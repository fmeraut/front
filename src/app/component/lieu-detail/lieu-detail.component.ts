import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-lieu-detail',
  templateUrl: './lieu-detail.component.html',
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
export class LieuDetailComponent implements OnInit {
  selectedFiles!: FileList;
  currentFileUpload: any;
  place:Place=new Place()
  currentRate = 0;
  constructor(private placeService:PlaceService) { }
  
  ngOnInit(): void {
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }

  savePlace(){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.placeService.save(this.currentFileUpload,this.place).subscribe(
      () => {this.place = new Place();}
    )
  }

}
