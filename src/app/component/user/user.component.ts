import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersExtra : any = null;
  user : User = new User();

  constructor(private utilisateurService : UserService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(){
    this.utilisateurService.findAllUtilisateurs().subscribe(data => {this.usersExtra = data});
  }

  

  deleteUser(id : number){
    this.utilisateurService.deleteUtilisateur(id).subscribe(
      () => {this.findAllUsers()}
      )
  }

  saveUser(){
    this.utilisateurService.saveUtilisateur(this.user).subscribe(
      () => {this.findAllUsers();
      this.user = new User();}
    )
  }
  
}
