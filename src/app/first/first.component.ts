import { HEROES } from './../mock.heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  hero2: Hero = {
    id: 1,
    name: "Ajay"
  };

  constructor() {
  }

  ngOnInit() {
  }
  selectedHero: Hero
  onSelect(hero) {
    console.log("In onselect method");
    this.selectedHero = hero;
    console.log(this.selectedHero, "data");
  }
}
