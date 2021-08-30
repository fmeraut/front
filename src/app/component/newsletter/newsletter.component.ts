import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Mail } from 'src/app/model/mail';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  mail:Mail=new Mail();
  constructor(private router:Router, private mailService:MailService) { }

  ngOnInit(): void {
  }

  sendMail(){
    this.mailService.sendMail(this.mail).subscribe(() => {this.mail = new Mail();}
    )
  }

}
