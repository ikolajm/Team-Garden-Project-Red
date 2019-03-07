import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbURL = 'https://efa-gardenapp-backend.herokuapp.com/api/';

  constructor() { }
}
