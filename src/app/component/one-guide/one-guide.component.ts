import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {GuideService} from 'src/app/services/guide.service';
import {GuidecommentService} from 'src/app/services/guidecomment.service';
import{Guidecomment} from 'src/app/model/guidecomment'
import { PlaceService } from 'src/app/services/place.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Guide } from 'src/app/model/guide';

@Component({
  selector: 'app-one-guide',
  templateUrl: './one-guide.component.html',
  styleUrls: ['./one-guide.component.css']
})
export class OneGuideComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  guide:Guide = new Guide();

  placesExtra :any = null;
  placesCountry: any = null;

     // commentaires
     guideCommentExtra:any = null;
     guideComment: Guidecomment = new Guidecomment();

  constructor(private guideService:GuideService,
    private placeService: PlaceService, private guidecommentService: GuidecommentService) {}
   



  ngOnInit(): void {
    let guideId = localStorage.getItem("guideId");
    let guideCountry = localStorage.getItem("guideCountry");
    if(guideId!=null && guideCountry!=null){
    
    this.guideService.findone(+guideId).subscribe(data => {this.guide=data});
    this.findByGuide(+guideId);
    this.findByCountry(guideCountry);
    this.findByGuideBis(+guideId);
  }
  }
  

  // fonction liees aux guides
  associatePlace(id:number){
    this.guide.place.id=id;
    this.guideService.associatePlace(this.guide);
  }

  //fonctions liees aux places
  findByGuide(id:number){
    this.placeService.findByGuide(id).subscribe(data => {this.placesExtra = data});
  }

  findByCountry(country: any){
    this.placeService.findPlaceByCountry(country).subscribe(data => {this.placesCountry= data});
  }

  // fonction pdf

  @ViewChild('content')content!: ElementRef;  
  public SavePDF():void{  
    let DATA:any= document.getElementById('content');
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('guide.pdf');
    });  
  }

  // fonctions liées aux commentaires
  findByGuideBis(id : number){
    this.guidecommentService.findByGuideBis(id).subscribe(data => {this.guideCommentExtra = data});
  }

  deleteComment(id : number){
    this.guidecommentService.delete(id).subscribe(
      () => {this.findByGuideBis(this.guide.id)}
    )
  }

  saveComment(){
    this.guidecommentService.save(this.guideComment).subscribe(
      () => {this.findByGuideBis(this.guide.id);
      this.guideComment = new Guidecomment();
    }
    )
  }

  savePlace(gid:number,pid:number){
    this.guideService.savePlace(gid,pid);
  }
}


  




