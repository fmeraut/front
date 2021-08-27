import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  credentials ={username: '', password: ''}
  constructor(private appService:AppService, private HttpClient:HttpClient, private router: Router){}


  ngOnInit(): void {


    
  }

  login(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl('/dashboard')});
    return false;
  }
}
