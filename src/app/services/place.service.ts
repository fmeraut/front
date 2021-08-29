import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
  })
  export class PlaceService {
	private baseURL = "http://localhost:9090/gestionPlaces/places";
  
	constructor(private httpClient : HttpClient) { }
  
	public findAllPlaces(): Observable<any>{
	  return this.httpClient.get(this.baseURL);
	}

	public findGuideByCountry(country : any): Observable<any>{
		return this.httpClient.get(this.baseURL+"/country/"+country);
	  }

	public findGuideByTitle(title : any): Observable<any>{
		return this.httpClient.get(this.baseURL+"/title/"+title);
	  }

	public findByGuide(id: number): Observable<any>{
		return this.httpClient.get(this.baseURL+"/guide/"+id);
	}

	 
	

	
  
	
  
	
	
  }