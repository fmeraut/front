import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm!: FormGroup;
  user:User = new User();
  constructor(private router:Router, private userService:UserService, 
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("editUserId");
    if(!userId){
      alert("Invalid Action ...");
      this.router.navigate(['/component/admin']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id:[],
      nom : ['', Validators.required],
      prenom : ['',Validators.required]
    })
    this.userService.getUtilisateur(+userId).subscribe(data => {this.editForm.setValue(data);});
  }
  updateUtilisateur(){
    var varJson = JSON.stringify(this.editForm.value);
    this.userService.updateUtilisateur(varJson).subscribe(()=>{this.router.navigate(['/component/admin']);});
  }

}
