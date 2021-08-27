import { Component, OnInit } from '@angular/core';
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

  constructor(private userService : UserService) { }

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

  saveUser(){
    this.userService.saveUtilisateur(this.user).subscribe(
      () => {this.findAllUsers();
      this.user = new User();}
    )
  }

}
