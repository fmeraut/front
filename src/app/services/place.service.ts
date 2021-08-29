import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Place} from '../model/place';

@Injectable({
	providedIn: 'root'
  })
  export class PlaceService {
	private baseURL = "http://localhost:9090/gestionPlaces/places";
  
	constructor(private httpClient : HttpClient) { }
  
	public findAllPlaces(): Observable<any>{
	  return this.httpClient.get(this.baseURL);
	}

	public findone(id:number): Observable<any>{
		return this.httpClient.get(this.baseURL+"/"+id);
	  }

	public findPlaceByCountry(country : any): Observable<any>{
		return this.httpClient.get(this.baseURL+"/country/"+country);
	  }

	public findPlaceByTitle(title : any): Observable<any>{
		return this.httpClient.get(this.baseURL+"/title/"+title);
	  }

	public findByPlace(id: number): Observable<any>{
		return this.httpClient.get(this.baseURL+"/place/"+id);
	}

	
	public save(file:File, place:Place){
		const formData: FormData = new FormData();
		formData.append('title', place.title);
		formData.append('country', place.country);
		formData.append('region', place.region);
		formData.append('city', place.city);
		formData.append('description', place.description);
		formData.append('adress', place.adress);
		formData.append('schedules', place.schedules);
		formData.append('cost', place.cost);
		formData.append('photos', file);
		formData.append('rating', place.rating);
		const req = new HttpRequest('POST',this.baseURL,formData,{reportProgress:true, responseType:'text'});
		return this.httpClient.request(req);
	  }

	
  }