import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from 'src/app/app.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usersExtra : any = null;
  user : User = new User();

  constructor(private appService:AppService, private userService : UserService, private router: Router) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  
  findAllUsers(){
    this.userService.findAllUtilisateurs().subscribe(data => {this.usersExtra = data});
  }

  deleteUser(id : number){
    this.userService.deleteUtilisateur(id).subscribe(
      () => {this.findAllUsers()}
      )
  }

  editUser(user:User){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",user.id.toString());
    this.router.navigate(['/component/editUser',user.id]);
  }

  authenticated(){
    return this.appService.authenticated;
  }

}