import { Component, HostListener } from '@angular/core';
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
  mapa?: any[] = Maps;

  maps?: any[] = [];

  filteredBombs?: any[];

  selectedBomb?: any = {
    id: null,
    group: null,
  };

  dropdownMap = false;
  dropdownTeam = false;

  selecao: any = {
    bomb: null,
    slot: null
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    event.target.innerWidth;
    console.log(event);
    this.getWidthSvg()
    this.getHeightSvg()
  }

  selecionaSlot(event: any, bomb: any, idSlot: number) {
    if (event) {
      event.stopPropagation()
    }

    this.selecao = {
      bomb: bomb.id,
      slot: idSlot,
    };

    this.selectedBomb = bomb;
  }

  ngOnInit() {
    this.maps = Maps;
    this.changeFilter();
  }

  changeFilter(): void {
    this.filteredBombs = this.maps?.filter(mapa => mapa.name === this.filter.map);
    this.reset();
  }

  prevPixel() {
    this.selecao.slot = this.selecao.slot - 1;
  }

  nextPixel() {
    this.selecao.slot = this.selecao.slot + 1;
  }

  setPixel(group: any) {
    this.selecao.slot = group.id;
  }

  reset() {
    this.selectedBomb = null;

    this.selecao = {
      bomb: null,
      slot: null,
    }
  }

  toggleDropdownMap(value: boolean, change: boolean) {
    this.dropdownMap = value;

    if (change) {
      this.changeFilter();
    }
  }

  toggleDropdownTeam(value: boolean, change: boolean) {
    this.dropdownTeam = value;

    if (change) {
      this.changeFilter();
    }
  }

  getWidthSvg(): number {
    const map = document.querySelector('#map');
    const teste = map?.getBoundingClientRect();
    console.log('teste', teste);

    return teste?.width!;
  }

  getHeightSvg(): number {
    const map = document.querySelector('#map');
    const teste = map?.getBoundingClientRect();
    console.log('teste', teste);

    return teste?.height!;
  }
}
