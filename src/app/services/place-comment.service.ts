import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceCommentService {
  private baseURL = "http://localhost:9090/gestionPlaceComments/placeComments";

  constructor(private httpClient: HttpClient) { }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(placeComment : any): Observable<any>{
    return this.httpClient.post(this.baseURL, placeComment);
  }

  public findByPlace(id: number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/place/"+id);
  }

}
