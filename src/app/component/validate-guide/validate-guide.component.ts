import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guide } from 'src/app/model/guide';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-validate-guide',
  templateUrl: './validate-guide.component.html',
  styleUrls: ['./validate-guide.component.css']
})
export class ValidateGuideComponent implements OnInit {

  list:any;
  constructor(private guideService:GuideService,private router: Router) { }

  ngOnInit(): void {
    this.findUnvalidated();
  }

  findUnvalidated(){
    this.guideService.findUnvalidated().subscribe(data => {this.list = data});
  }

  validate(id:number){
    this.guideService.validate(id).subscribe(
      () => {this.findUnvalidated()}
      );
  }

  delete(id:number){
    this.guideService.delete(id).subscribe(
      () => {this.findUnvalidated()}
      );
  }

  getGuide(guide:Guide){
    localStorage.removeItem("guideId");
    localStorage.setItem("guideId",guide.id.toString());
    this.router.navigate(['/component/oneExperience',guide.id]);
  }

}
