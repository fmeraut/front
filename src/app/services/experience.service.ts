import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private baseURL = "http://localhost:9090/gestionExperiences/experiences";

  constructor(private httpClient: HttpClient) { }

  public findall(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public findone(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public findcountry(country:string): Observable<any>{
    return this.httpClient.get(this.baseURL+"/country/"+country);
  }

  public findtitle(title:string): Observable<any>{
    return this.httpClient.get(this.baseURL+"/title/"+title);
  }

  public saveExperience(experience : any): Observable<any>{
    return this.httpClient.post(this.baseURL, experience);
  }

  public findtop(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/top");
  }

  public findtop4(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/top4");
  }

  public findCountryList(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/countryList");
  }

  public save(file:File, experience:Experience){
    const formData: FormData = new FormData();
    formData.append('title', experience.title);
    formData.append('country', experience.country);
    formData.append('text', experience.text);
    formData.append('videos', experience.videos);
    formData.append('photos', file);
    formData.append('rating', experience.rating);
    const req = new HttpRequest('POST',this.baseURL,formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public validate(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/validate/"+id);
  }

  public findUnvalidated(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/unvalidated");
  }

  public findvalidated(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/validated");
  }
}
