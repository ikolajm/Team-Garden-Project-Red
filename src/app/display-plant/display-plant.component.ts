import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-plant',
  templateUrl: './display-plant.component.html',
  styleUrls: ['./display-plant.component.css']
})
export class DisplayPlantComponent implements OnInit {
  plants = [];

  constructor() { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() : void  {
    
  }

}
