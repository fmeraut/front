import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

	 
	

	
  
	
  
	
	
  }