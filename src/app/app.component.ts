import { Component } from '@angular/core';
import { Maps } from '../assets/maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = {
    maps: ['mirage', 'overpass', 'inferno', 'ancient', 'anubis', 'nuke', 'vertigo'],
    teams: ['t', 'ct'],
    bombs: ['smoke', 'molotov', 'flash', 'granada'],
  }

  filter = {
    map: 'mirage',
    team: 't',
    bomb: 'smoke',
    search: ''
  }

  maps?: any[] = [];

  filteredBombs?: any[];

  selectedBomb?: any = {
    id: null,
    group: null,
  };

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
    console.log(event);

    if (event) {
      event.stopPropagation()
    }

    console.log(group);

    this.selectedBomb = {
      id: 0,
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

  reset() {
    this.selectedBomb = {
      id: null,
      group: null,
    }
  }
}
