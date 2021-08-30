import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private baseURL = "http://localhost:9090/gestionMail/mail";

  constructor(private httpClient : HttpClient) { }

  public sendMail(mail : Mail): Observable<any>{
    return this.httpClient.post(this.baseURL, mail);
  }
}
