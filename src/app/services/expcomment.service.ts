import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpcommentService {
  private baseURL = "http://localhost:9090/gestionExpComments/expComments";

  constructor(private httpClient : HttpClient) { }

  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(expcomment: any): Observable<any>{
    return this.httpClient.post(this.baseURL, expcomment);
  }

  public findOne(id: number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public findByExperience(id: number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/experience/"+id);
  }

}
