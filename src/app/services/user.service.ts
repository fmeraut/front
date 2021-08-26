import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:9090/gestionUsers/users";

  constructor(private httpClient : HttpClient) { }

  public findAllUtilisateurs(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public deleteUtilisateur(id: number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public saveUtilisateur(user : any): Observable<any>{
    return this.httpClient.post(this.baseURL, user);
  }

  public getUtilisateur(id : number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  
}
