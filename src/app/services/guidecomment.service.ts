import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuidecommentService {
  private baseURL = "http://localhost:9090/gestionGuideComments/guideComments";

  constructor(private httpClient : HttpClient) { }

  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(guidecomment: any): Observable<any>{
    return this.httpClient.post(this.baseURL, guidecomment);
  }

  public findOne(id: number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public findByGuideBis(id: number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/guide/"+id);
  }

}
