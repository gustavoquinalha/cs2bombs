import { Mapa } from "src/app/utils/maps";

export const Maps: Mapa[] = [
  {
    id: 1,
    name: "mirage",
    smoke: [
      {
        id: 0,
        x: 34,
        y: 40,
        name: "Smoke janela",
        team: "terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke janela 1",
            keys: ['d', 'jumpthrow'],
            slots: {
              x1: '37%',
              y1: '43%',
              x2: '98.2%',
              y2: '23.5%',
            }
          },
          {
            id: 1,
            name: "Smoke janela 2",
            keys: [],
            slots: {
              x1: '37%',
              y1: '43%',
              x2: '73%',
              y2: '43%',
            }
          }
        ]
      },
      {
        id: 1,
        x: 50,
        y: 68,
        name: "Smoke cabecinha",
        team: "terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke cabecinha 1",
            keys: [],
            slots: {}
          },
        ]
      },
      {
        id: 2,
        x: 67,
        y: 65,
        name: "Smoke Caverna",
        team: "counter-terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke Caverna 1",
            keys: [],
            slots: {}
          },
        ]
      },
      {
        id: 3,
        x: 46,
        y: 46,
        name: "Smoke liga",
        team: "counter-terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke liga 1",
            keys: [],
            slots: {}
          },
        ]
      },
      {
        id: 4,
        x: 63.5,
        y: 84,
        name: "Smoke palacio",
        team: "counter-terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke palacio 1",
            keys: [],
            slots: {}
          },
        ]
      },
      {
        id: 5,
        x: 40,
        y: 89,
        name: "Smoke ct",
        team: "terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke ct 1",
            keys: [],
            slots: {}
          },
        ]
      },
      {
        id: 6,
        x: 45,
        y: 69,
        name: "Smoke jungle",
        team: "terrorist",
        bombs: [
          {
            id: 0,
            name: "Smoke jungle 1",
            keys: [],
            slots: {}
          },
        ]
      }
    ]
  }
]
