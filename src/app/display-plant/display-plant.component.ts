import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-display-plant',
  templateUrl: './display-plant.component.html',
  styleUrls: ['./display-plant.component.css']
})
export class DisplayPlantComponent implements OnInit {
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

}
