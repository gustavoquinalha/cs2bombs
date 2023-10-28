import { Component } from '@angular/core';
import { Maps } from '../assets/maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = {
    maps: [
      {
        name: 'mirage',
        checked: true,
      },
      {
        name: 'overpass',
        checked: false,
      },
      {
        name: 'inferno',
        checked: false,
      },
      {
        name: 'ancient',
        checked: false,
      },
      {
        name: 'anubis',
        checked: false,
      },
      {
        name: 'nuke',
        checked: false,
      },
      {
        name: 'vertigo',
        checked: false,
      }],
    teams: [
      {
        name: 'terrorist',
        checked: true,
      },
      {
        name: 'counter-terrorist',
        checked: false,
      }
    ],
    bombs: [
      {
        name: 'smoke',
        checked: true,
      },
      {
        name: 'molotov',
        checked: false,
      },
      {
        name: 'flash',
        checked: false,
      },
      {
        name: 'grenade',
        checked: false,
      }
    ],
  }

  filter = {
    map: 'mirage',
    team: 'terrorist',
    bomb: 'smoke',
    search: ''
  }

  maps?: any[] = [];

  filteredBombs?: any[];

  selectedBomb?: any = {
    id: null,
    group: null,
  };

  dropdownMap = false;
  dropdownTeam = false;

  ngOnInit() {
    this.maps = Maps;
    this.changeFilter();
  }

  changeFilter(): void {
    console.log('changeFilter');

    this.filteredBombs = this.maps?.filter(mapa => mapa.name === this.filter.map);
    this.reset();
  }

  selectBomb(event: any, group: any) {
    console.log('selectBomb');

    if (event) {
      event.stopPropagation()
    }

    this.selectedBomb = {
      id: group.id,
      group: group,
    }
  }

  prevPixel() {
    this.selectedBomb.id = this.selectedBomb.id - 1;
  }

  nextPixel() {
    this.selectedBomb.id = this.selectedBomb.id + 1;
  }

  setPixel(bombId: number) {
    console.log('setPixel', bombId);

    this.selectedBomb.id = bombId;
  }

  changeBomb(name: string) {
    console.log('changeBomb', name);

    this.config.bombs.forEach(bomb => {
      bomb.checked = false;
    });

    this.filter.bomb = name;
  }

  reset() {
    console.log('reset');

    this.selectedBomb = {
      id: null,
      group: null,
    }
  }

  toggleDropdownMap() {
    console.log('toggleDropdownMap');

    this.dropdownMap = !this.dropdownMap;
    this.changeFilter();
  }

  toggleDropdownTeam() {
    console.log('toggleDropdownTeam');

    this.dropdownTeam = !this.dropdownTeam;
    this.changeFilter();
  }
}
