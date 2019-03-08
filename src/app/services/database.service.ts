import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from '../models/plant.model';
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

  private deleteURL = 'https://efa-gardenapp-backend.herokuapp.com/api/product/'

  constructor(private http: HttpClient) { }

  getPlants() : Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantURL);
  }

  deletePlant(id) {
    return this.http.get(`${this.deleteURL}/${id}`);
  }

}
