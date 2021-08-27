import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private baseURL = "http://localhost:9090/gestionExperiences/experiences";

  constructor(private HttpClient: HttpClient) { }

  public findall(): Observable<any>{
    return this.HttpClient.get(this.baseURL);
  }
  public delete(id:number): Observable<any>{
    return this.HttpClient.delete(this.baseURL+"/"+id);
  }

  public save(experience:any): Observable<any>{
    return this.HttpClient.post(this.baseURL,experience);
  }

  public findone(id:number): Observable<any>{
    return this.HttpClient.get(this.baseURL+"/"+id);
  }

  public findcountry(country:string): Observable<any>{
    return this.HttpClient.get(this.baseURL+"/country/"+country);
  }

  public findtitle(title:string): Observable<any>{
    return this.HttpClient.get(this.baseURL+"/title/"+title);
  }

  public findunvalidated(): Observable<any>{
    return this.HttpClient.get(this.baseURL+"/"+"unvalidated");
  }
}
