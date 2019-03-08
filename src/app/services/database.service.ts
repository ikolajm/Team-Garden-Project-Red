import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from '../models/plant.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private plantURL = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

  private loginURL = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';

  constructor(private http: HttpClient) { }

  getPlants() : Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantURL);
  }

  loginAuth(user: User) : Observable<User[]> {
    return this.http.post<User[]>(this.loginURL, user, httpOptions);
  }

}
