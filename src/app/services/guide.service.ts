import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Guide} from '../model/guide';
import { Place } from '../model/place';

@Injectable({
	providedIn: 'root'
  })
  export class GuideService {
	private baseURL = "http://localhost:9090/gestionGuides/guides";
  
	constructor(private httpClient : HttpClient) { }
  
	public findAllGuides(): Observable<any>{
	  return this.httpClient.get(this.baseURL);
	}

	public findGuideByCountry(country : any): Observable<any>{
		return this.httpClient.get(this.baseURL+"/country/"+country);
	  }

	public findGuideByTitle(title : any): Observable<any>{
		return this.httpClient.get(this.baseURL+"/title/"+title);
	  }

	  public save(file:File, guide:Guide){
		const formData: FormData = new FormData();
		formData.append('title', guide.title);
		formData.append('country', guide.country);
		formData.append('text', guide.text);
		formData.append('photos', file);
		formData.append('rating', guide.rating);
		const req = new HttpRequest('POST',this.baseURL,formData,{reportProgress:true, responseType:'text'});
		return this.httpClient.request(req);
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

	  public saveGuide(guide : any): Observable<any>{
		return this.httpClient.post(this.baseURL, guide);
	  }

	  public associatePlace(guide : any): Observable<any>{
		return this.httpClient.put(this.baseURL+"/asso", guide);
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

	  public findCountryList(): Observable<any>{
		return this.httpClient.get(this.baseURL+"/countryList");
	  }

	  public findtop(): Observable<any>{
		return this.httpClient.get(this.baseURL+"/top");
	  }
	
	  public findtop4(): Observable<any>{
		return this.httpClient.get(this.baseURL+"/top4");
	  }
	
	  /*
	  public savePlace(gid:number,pid:number): Observable<any>{
		  console.log(this.baseURL+"/guide/"+gid+"/place/"+pid);
		return this.httpClient.get(this.baseURL+"/guide/"+gid+"/place/"+pid);
	  }
	*/
	public savePlace(guide:Guide,place:Place): Observable<any>{
		const formData: FormData = new FormData();
		formData.append('gid', guide.id.toString());
		formData.append('pid', place.id.toString());
		const req = new HttpRequest('POST',this.baseURL+'/place',formData,{reportProgress:true, responseType:'text'});
		return this.httpClient.request(req);
  }

  }