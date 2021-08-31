import { Component, OnInit } from '@angular/core';
import { PlaceComment } from 'src/app/model/place-comment';
import { PlaceCommentService } from 'src/app/services/place-comment.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-one-place',
  templateUrl: './one-place.component.html',
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
      .container{
        display:flex;
        align-items: left;
      }
    `
  ]
})
export class OnePlaceComponent implements OnInit {

  place:any;
  placeCommentExtra:any;
  placeComment:PlaceComment=new PlaceComment();
  constructor(private placeService:PlaceService, private placeCommentService:PlaceCommentService) { }

  ngOnInit(): void {
    let placeId = localStorage.getItem("placeId");
    if(placeId!=null){
    
    this.placeService.findone(+placeId).subscribe(data => {this.place=data});
    this.findByPlace(+placeId);
    this.placeComment.place.id=+placeId;
  }
  }

  findByPlace(id : number){
    this.placeCommentService.findByPlace(id).subscribe(data => {this.placeCommentExtra = data});
  }

  deleteComment(id : number){
    this.placeCommentService.delete(id).subscribe(
      () => {this.findByPlace(this.place.id)}
    )
  }

  saveComment(){
    console.log("je suis le place comment component:"+this.placeComment.id);
    this.placeCommentService.save(this.placeComment).subscribe(
      () => {this.findByPlace(this.place.id);
      this.placeComment = new PlaceComment();
    }
    )
  }



}
