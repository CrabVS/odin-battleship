import Ship from '../ship/ship';

const shipList = [
  { name: 'carrier', length: 4 },
  { name: 'carrier2', length: 2 },
];

class Gameboard {
  constructor() {
    this.gridSize = 10; // Functions as either the height or width
    this.ships = [];
    this.illegalCoords = [];
    this.currentShip = 0;
  }

  addShip(coords) {
    const ship = new Ship(
      shipList[this.currentShip].name,
      shipList[this.currentShip].length,
      coords,
    );

    this.ships.push(ship);
  }

  // should be able to place ships at specific coordinates by calling ship factory
  // a receiveAttack func to check if ship was hit or not and to update the tile
  // report if all ships were hit or not
}

export default Gameboard;
