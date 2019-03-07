import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from '../models/plant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private plantURL = 'https://efa-gardenapp-backend.herokuapp.com/api/product';
  private authURL = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';

  constructor(private http: HttpClient) { }

  getPlants() : Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantURL);
  }

}
