import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-display-plant',
  templateUrl: './display-plant.component.html',
  styleUrls: ['./display-plant.component.css']
})
export class DisplayPlantComponent implements OnInit {
  admin = localStorage.getItem('role');
  token = localStorage.getItem('token');
  plants = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() : void  {
    this.dbService.getPlants().subscribe(plants => {
      this.plants = plants;
    })
  }

  removePlant(id): any {
    this.dbService.deletePlant(id).subscribe(res => {
      this.getPlants();
    })
  }

}
