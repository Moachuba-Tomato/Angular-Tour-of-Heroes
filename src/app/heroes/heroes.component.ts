import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  // hero: Hero = {
  //   id: 1,
  //   name: 'LApu LApu'
  // }

heroes =  HEROES;

selectedHero?: Hero;
onSelect(hero : Hero): void{
 this.selectedHero = hero;
}

classVar = "button:hover ul button:active"


}

